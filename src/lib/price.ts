const priceFormat = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

/** 1800 → "$ 1.800" */
export function formatPrice(value: number) {
  return priceFormat.format(value)
}
