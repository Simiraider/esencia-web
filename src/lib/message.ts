import { varieties } from '../data/varieties'

export function buildOrderMessage(quantities: Record<string, number>) {
  const lines = varieties
    .filter((variety) => (quantities[variety.slug] ?? 0) > 0)
    .map((variety) => {
      const quantity = quantities[variety.slug] ?? 0
      return {
        name:
          quantity === 1
            ? (variety.singularMessageName ?? variety.messageName)
            : variety.messageName,
        quantity,
      }
    })

  if (lines.length === 0) {
    return [
      '¡Hola, Esencia!',
      'Quiero hacer un pedido de alfajores.',
      '',
      '¿Me cuentan disponibilidad, precio y opciones de entrega y pago?',
      '¡Gracias!',
    ].join('\n')
  }

  const total = lines.reduce((sum, line) => sum + line.quantity, 0)

  return [
    '¡Hola, Esencia!',
    'Quiero consultar por este pedido:',
    '',
    ...lines.map((line) => `${line.quantity} ${line.name}`),
    '',
    `Total de alfajores: ${total}`,
    '',
    '¿Me confirman disponibilidad, precio y opciones de entrega y pago?',
    '¡Gracias!',
  ].join('\n')
}
