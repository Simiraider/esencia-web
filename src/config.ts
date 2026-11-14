/**
 * Número de WhatsApp del negocio, con código de país y sin signos.
 * Se puede sobreescribir con la variable de entorno VITE_WHATSAPP_NUMBER
 * (por ejemplo en Vercel) sin tocar el código.
 */
const PHONE = import.meta.env.VITE_WHATSAPP_NUMBER ?? '5491164721342'

export const WHATSAPP_NUMBER = String(PHONE).replace(/\D/g, '')

export const isWhatsAppConfigured = WHATSAPP_NUMBER.length >= 8

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Formato legible: +54 9 11 6472 1342 */
export function formatWhatsAppNumber() {
  const digits = WHATSAPP_NUMBER

  if (digits.length === 13) {
    return `+${digits.slice(0, 2)} ${digits.slice(2, 3)} ${digits.slice(
      3,
      5,
    )} ${digits.slice(5, 9)} ${digits.slice(9)}`
  }

  return `+${digits}`
}
