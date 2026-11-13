import { useEffect, useMemo, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useOrder } from '../context/OrderContext'
import { getVariety, varieties, type Variety } from '../data/varieties'
import { PillButton } from '../components/Pill'
import { OrderFooter } from '../components/OrderFooter'
import { formatPrice } from '../lib/price'

function Counter({
  variety,
  quantity,
  onChange,
}: {
  variety: Variety
  quantity: number
  onChange: (direction: 1 | -1) => void
}) {
  return (
    <div className="flex shrink-0 items-center gap-3.5">
      <button
        type="button"
        onClick={() => onChange(-1)}
        disabled={quantity === 0}
        aria-label={`Quitar ${variety.name}`}
        className="flex h-[53px] w-12 items-center justify-center rounded-full bg-cream-deep text-[22px] font-semibold leading-none text-brown transition-colors hover:bg-line/70 disabled:cursor-not-allowed disabled:opacity-40"
      >
        −
      </button>
      <span
        aria-live="polite"
        className="w-8 text-center text-[22px] font-semibold leading-[1.45] text-brown"
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => onChange(1)}
        aria-label={`Agregar ${variety.name}`}
        className="flex h-[53px] w-12 items-center justify-center rounded-full bg-brown text-[22px] font-semibold leading-none text-cream-deep transition-colors hover:bg-[#3A1808]"
      >
        +
      </button>
    </div>
  )
}

export function Order() {
  const { quantities, totalUnits, change, setQuantity } = useOrder()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const appliedSlug = useRef<string | null>(null)

  const estimatedTotal = useMemo(() => {
    const chosen = varieties.filter((variety) => (quantities[variety.slug] ?? 0) > 0)
    if (chosen.length === 0) return null
    if (chosen.some((variety) => variety.price === null)) return null

    return chosen.reduce(
      (total, variety) =>
        total + (quantities[variety.slug] ?? 0) * (variety.price ?? 0),
      0,
    )
  }, [quantities])

  useEffect(() => {
    const slug = searchParams.get('v')
    if (!slug || appliedSlug.current === slug) return

    appliedSlug.current = slug
    const variety = getVariety(slug === 'mini' ? 'mini-chocolate' : slug)

    if (variety && (quantities[variety.slug] ?? 0) === 0) {
      setQuantity(variety.slug, variety.step)
    }

    const next = new URLSearchParams(searchParams)
    next.delete('v')
    setSearchParams(next, { replace: true })
  }, [searchParams, quantities, setQuantity, setSearchParams])

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-10 sm:px-10 lg:px-16 lg:pb-8 lg:pt-[52px]">
          <p className="eyebrow">01 Elegí / 02 Revisá / 03 WhatsApp</p>
          <h1 className="mt-4 max-w-[706px] font-display text-[38px] font-bold leading-[1.1] tracking-[-0.01em] text-brown sm:text-[48px] lg:text-[54px]">
            Tu combinación, tus reglas.
          </h1>
          <p className="mt-4 max-w-[655px] text-[18px] leading-[1.45] text-ink lg:text-[20px]">
            Sumá las unidades que quieras de cada variedad. Sin pago en esta
            página.
          </p>
          <p className="mt-2 max-w-[600px] text-[13px] leading-[1.45] text-brown">
            Variedades e imágenes ilustrativas · Precios por unidad,
            disponibilidad a confirmar.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 pb-14 sm:px-10 lg:px-16 lg:pb-16 xl:grid-cols-[minmax(0,1fr)_416px] xl:items-start">
          <ul className="flex flex-col gap-5">
            {varieties.map((variety) => {
              const quantity = quantities[variety.slug] ?? 0

              return (
                <li
                  key={variety.slug}
                  className="flex flex-col gap-5 rounded-[20px] border border-line bg-cream p-4 lg:flex-row lg:items-center lg:gap-6"
                >
                  <img
                    src={variety.image}
                    alt={variety.imageAlt}
                    loading="lazy"
                    className="h-[200px] w-full shrink-0 rounded-2xl object-cover sm:h-[240px] lg:h-40 lg:w-[174px]"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                    <div className="flex min-w-0 flex-col gap-2.5">
                      <h2 className="font-display text-[24px] font-bold leading-[1.1] text-brown sm:text-[28px]">
                        {variety.name}
                      </h2>
                      <p className="max-w-[395px] text-[16px] leading-[1.45] text-brown">
                        {variety.description}
                      </p>
                      <p className="text-[14px] font-semibold leading-[1.45] text-brown">
                        {variety.price !== null
                          ? `${formatPrice(variety.price)} c/u`
                          : 'Precio a confirmar'}
                        {variety.note ? (
                          <span className="font-normal text-ink">
                            {' '}
                            · {variety.note}
                          </span>
                        ) : null}
                      </p>
                    </div>
                    <div className="flex shrink-0 justify-end">
                      <Counter
                        variety={variety}
                        quantity={quantity}
                        onChange={(direction) => change(variety.slug, direction)}
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <aside
            aria-label="Resumen del pedido"
            className="flex h-fit flex-col gap-5 rounded-3xl bg-cream-deep p-6 sm:p-7 xl:sticky xl:top-6"
          >
            <h2 className="font-display text-[32px] font-bold leading-[1.1] text-brown">
              Tu pedido
            </h2>

            <ul className="flex flex-col gap-4">
              {varieties.map((variety) => {
                const quantity = quantities[variety.slug] ?? 0

                return (
                  <li
                    key={variety.slug}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="text-[16px] leading-[1.45] text-ink">
                      {variety.name}
                    </span>
                    <span
                      className={`text-[18px] font-semibold leading-[1.45] ${
                        quantity === 0 ? 'text-brown/45' : 'text-brown'
                      }`}
                    >
                      {quantity}
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center justify-between border-t border-line pt-5">
              <span className="text-[17px] font-semibold leading-[1.45] text-brown">
                Alfajores en total
              </span>
              <span className="font-display text-[24px] font-bold leading-[1.1] text-brown">
                {totalUnits}
              </span>
            </div>

            {estimatedTotal !== null && (
              <div className="flex items-center justify-between border-t border-line pt-5">
                <span className="text-[17px] font-semibold leading-[1.45] text-brown">
                  Total estimado
                </span>
                <span className="font-display text-[24px] font-bold leading-[1.1] text-brown">
                  {formatPrice(estimatedTotal)}
                </span>
              </div>
            )}

            <p className="text-[16px] leading-[1.45] text-brown">
              {estimatedTotal !== null
                ? 'El pago y la entrega se coordinan por WhatsApp.'
                : 'El importe y la entrega se coordinan por WhatsApp.'}
            </p>

            <PillButton
              onClick={() => navigate('/whatsapp')}
              disabled={totalUnits === 0}
              className="w-full"
            >
              Generar mi mensaje →
            </PillButton>

            {totalUnits === 0 && (
              <p className="text-center text-[15px] leading-[1.45] text-brown">
                Todavía no elegiste alfajores. ¡Empezá por tu favorito!
              </p>
            )}
          </aside>
        </div>
      </section>

      <OrderFooter text="ESENCIA · ALFAJORES / Elegí y combiná. El resto lo charlamos." />
    </>
  )
}
