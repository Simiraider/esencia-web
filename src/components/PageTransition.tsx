import { useLayoutEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const LOADER_DURATION = 620

/**
 * Muestra una pantalla de espera muy breve al cambiar de ruta para suavizar
 * el salto entre páginas. El contenido de cada pantalla entra con `.page-in`.
 */
export function PageTransition() {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)
  const lastPathname = useRef(pathname)

  useLayoutEffect(() => {
    if (lastPathname.current === pathname) return
    lastPathname.current = pathname

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setIsVisible(true)
    const timeout = window.setTimeout(
      () => setIsVisible(false),
      LOADER_DURATION,
    )

    return () => window.clearTimeout(timeout)
  }, [pathname])

  if (!isVisible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="page-loader fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-cream"
    >
      <img
        src="/img/logo.webp"
        alt=""
        className="h-16 w-16 rounded-full opacity-90"
      />
      <span className="eyebrow">Un momento con Esencia</span>
      <span className="sr-only">Cargando la página</span>
    </div>
  )
}
