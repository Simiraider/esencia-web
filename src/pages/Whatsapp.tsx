import { Link, useNavigate } from 'react-router-dom'
import { useOrder } from '../context/OrderContext'
import { buildOrderMessage } from '../lib/message'
import {
  formatWhatsAppNumber,
  isWhatsAppConfigured,
  whatsappUrl,
} from '../config'
import { PillLink } from '../components/Pill'
import { OrderFooter } from '../components/OrderFooter'

export function Whatsapp() {
  const { quantities, totalUnits, reset } = useOrder()
  const navigate = useNavigate()
  const message = buildOrderMessage(quantities)

  const startNewOrder = () => {
    reset()
    navigate('/pedido')
  }

  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-12 sm:px-10 lg:grid-cols-[minmax(0,560px)_minmax(0,640px)] lg:justify-between lg:gap-20 lg:px-20 lg:py-16">
          <div className="flex flex-col items-start gap-6">
            <p className="eyebrow">01 Elegí / 02 Revisá / 03 WhatsApp</p>
            <h1 className="max-w-[550px] font-display text-[42px] font-bold leading-[1.1] tracking-[-0.01em] text-brown sm:text-[54px] lg:text-[64px]">
              Tu pedido,
              <br />a un mensaje.
            </h1>
            <p className="max-w-[540px] text-[18px] leading-[1.45] text-brown lg:text-[21px]">
              Tu selección está preparada. El pedido se confirma cuando
              coordinamos por WhatsApp.
            </p>
            <img
              src="/img/logo.webp"
              alt="Sello de Esencia"
              loading="lazy"
              className="h-[160px] w-[160px] rounded-full object-cover lg:h-[220px] lg:w-[220px]"
            />
            <PillLink to="/pedido" variant="cream">
              ← Volver a revisar
            </PillLink>
          </div>

          <div className="flex flex-col gap-6 rounded-[28px] bg-cream-deep p-5 sm:p-8">
            <p className="eyebrow">Vista previa · No enviado</p>

            <div className="rounded-[20px] bg-cream p-5 sm:p-7">
              <p className="whitespace-pre-line text-[17px] leading-[1.55] text-brown sm:text-[19px]">
                {message}
              </p>
            </div>

            {!isWhatsAppConfigured && (
              <div className="rounded-2xl bg-sand px-5 py-4">
                <p className="text-[17px] font-semibold leading-[1.45] text-brown">
                  Falta configurar el número de WhatsApp
                </p>
                <p className="mt-2 text-[15px] leading-[1.45] text-brown">
                  El envío queda deshabilitado hasta agregar el número del
                  negocio con código de país.
                </p>
              </div>
            )}

            {isWhatsAppConfigured ? (
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brown px-6 py-3.5 text-center text-[17px] font-semibold leading-[1.45] text-cream-deep transition-colors hover:bg-[#3A1808]"
                >
                  Enviar por WhatsApp ↗
                </a>
                <p className="text-center text-[15px] leading-[1.45] text-brown">
                  Se abre WhatsApp al {formatWhatsAppNumber()}
                </p>
              </div>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-full bg-brown px-6 py-3.5 text-center text-[17px] font-semibold leading-[1.45] text-cream-deep opacity-45"
              >
                Enviar por WhatsApp · pendiente
              </button>
            )}

            <button
              type="button"
              onClick={startNewOrder}
              className="mx-auto rounded-full px-2 py-1 text-[16px] font-semibold leading-[1.45] text-brown underline-offset-4 transition-colors hover:underline"
            >
              Empezar un nuevo pedido
            </button>

            {totalUnits === 0 && (
              <p className="text-center text-[15px] leading-[1.45] text-brown">
                Todavía no seleccionaste alfajores.{' '}
                <Link
                  to="/pedido"
                  className="font-semibold underline underline-offset-4"
                >
                  Elegí tus favoritos
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      <OrderFooter text="ESENCIA · ALFAJORES / Todavía no se envió ni confirmó ningún pedido." />
    </>
  )
}
