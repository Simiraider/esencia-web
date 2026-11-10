import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'brown' | 'cream'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center text-[17px] font-semibold leading-[1.45] transition-colors duration-200'

const variants: Record<Variant, string> = {
  brown: 'bg-brown text-cream-deep hover:bg-[#3A1808]',
  cream: 'bg-cream-deep text-brown hover:bg-white',
}

type PillLinkProps = {
  to: string
  children: ReactNode
  variant?: Variant
  className?: string
}

export function PillLink({
  to,
  children,
  variant = 'brown',
  className = '',
}: PillLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}

type PillButtonProps = {
  children: ReactNode
  onClick?: () => void
  variant?: Variant
  className?: string
  disabled?: boolean
}

export function PillButton({
  children,
  onClick,
  variant = 'brown',
  className = '',
  disabled = false,
}: PillButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? 'cursor-not-allowed opacity-45' : ''
      } ${className}`}
    >
      {children}
    </button>
  )
}
