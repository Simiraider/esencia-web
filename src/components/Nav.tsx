import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Nuestros alfajores', to: '/#alfajores' },
  { label: 'Cómo pedir', to: '/#como-pedir' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="relative z-40 bg-cream">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-10 lg:px-16"
      >
        <Link
          to="/"
          onClick={close}
          className="flex items-center gap-3 sm:gap-4"
          aria-label="Alfajores Esencia, ir al inicio"
        >
          <img
            src="/img/logo.webp"
            alt=""
            width={84}
            height={84}
            className="h-14 w-14 rounded-full object-cover sm:h-[70px] sm:w-[70px] lg:h-[84px] lg:w-[84px]"
          />
          <span className="w-16 text-[11px] font-semibold uppercase leading-[1.45] tracking-[0.03em] text-ink lg:text-[12px]">
            Alfajores Esencia
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={close}
              className="text-[16px] font-medium leading-[1.45] text-ink transition-colors hover:text-brown"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/pedido"
            className="inline-flex items-center justify-center rounded-full bg-brown px-7 py-3.5 text-[17px] font-semibold leading-[1.45] text-cream-deep transition-colors hover:bg-[#3A1808]"
          >
            Armá tu pedido ↗
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/pedido"
            className="inline-flex items-center justify-center rounded-full bg-brown px-5 py-3 text-[15px] font-semibold leading-[1.45] text-cream-deep"
          >
            Armá tu pedido
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line"
          >
            <span
              className={`h-[1.5px] w-4 bg-brown transition-transform ${
                open ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[1.5px] w-4 bg-brown transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[1.5px] w-4 bg-brown transition-transform ${
                open ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="menu-movil"
          className="border-t border-line bg-cream px-5 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-[17px] font-medium text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
