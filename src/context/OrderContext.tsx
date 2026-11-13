import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getVariety, varieties } from '../data/varieties'

type Quantities = Record<string, number>

type OrderContextValue = {
  quantities: Quantities
  totalUnits: number
  selected: { slug: string; name: string; quantity: number }[]
  change: (slug: string, direction: 1 | -1) => void
  setQuantity: (slug: string, quantity: number) => void
  reset: () => void
}

const STORAGE_KEY = 'esencia-order'

const emptyQuantities = (): Quantities =>
  Object.fromEntries(varieties.map((variety) => [variety.slug, 0]))

function readStoredQuantities(): Quantities {
  const base = emptyQuantities()

  try {
    // El pedido vive solo mientras la pestaña está abierta: al cerrarla se
    // reinicia, así no quedan las cantidades de una compra anterior.
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    // Limpieza de versiones anteriores, que guardaban el pedido para siempre.
    window.localStorage.removeItem(STORAGE_KEY)
    if (!raw) return base

    const parsed = JSON.parse(raw) as Record<string, unknown>
    for (const variety of varieties) {
      const value = Number(parsed?.[variety.slug])
      if (Number.isFinite(value) && value > 0) {
        base[variety.slug] = Math.floor(value)
      }
    }
  } catch {
    // Si el dato guardado está roto, arrancamos con un pedido vacío.
  }

  return base
}

const OrderContext = createContext<OrderContextValue | null>(null)

export function OrderProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<Quantities>(readStoredQuantities)

  useEffect(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(quantities))
    } catch {
      // El pedido sigue funcionando aunque el navegador no permita guardar.
    }
  }, [quantities])

  const change = useCallback((slug: string, direction: 1 | -1) => {
    const variety = getVariety(slug)
    if (!variety) return

    setQuantities((current) => {
      const next = Math.max(0, (current[slug] ?? 0) + direction * variety.step)
      return { ...current, [slug]: next }
    })
  }, [])

  const setQuantity = useCallback((slug: string, quantity: number) => {
    setQuantities((current) => ({
      ...current,
      [slug]: Math.max(0, Math.floor(quantity)),
    }))
  }, [])

  const reset = useCallback(() => setQuantities(emptyQuantities()), [])

  const value = useMemo<OrderContextValue>(() => {
    const selected = varieties
      .map((variety) => ({
        slug: variety.slug,
        name: variety.messageName,
        quantity: quantities[variety.slug] ?? 0,
      }))
      .filter((item) => item.quantity > 0)

    return {
      quantities,
      selected,
      totalUnits: selected.reduce((total, item) => total + item.quantity, 0),
      change,
      setQuantity,
      reset,
    }
  }, [quantities, change, setQuantity, reset])

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
}

export function useOrder() {
  const context = useContext(OrderContext)
  if (!context) {
    throw new Error('useOrder tiene que usarse dentro de OrderProvider')
  }
  return context
}
