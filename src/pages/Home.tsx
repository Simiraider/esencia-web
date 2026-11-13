import { Link } from 'react-router-dom'
import { PillLink } from '../components/Pill'
import { landingVarieties } from '../data/varieties'

const steps = [
  {
    number: '01',
    title: 'Elegí tus favoritos',
    text: 'Combiná variedades y sumá las cantidades que quieras.',
  },
  {
    number: '02',
    title: 'Revisá tu selección',
    text: 'Chequeá los alfajores antes de preparar el mensaje.',
  },
  {
    number: '03',
    title: 'Seguimos por WhatsApp',
    text: 'Coordiná disponibilidad, precio, entrega y pago por chat.',
  },
]

const faqs = [
  {
    question: '¿Puedo combinar variedades?',
    answer:
      'Sí. En este recorrido elegís cada variedad y su cantidad, y armás la combinación que quieras.',
  },
  {
    question: '¿Cómo se confirma mi pedido?',
    answer:
      'Preparás el resumen y lo enviás por WhatsApp. La confirmación se coordina por chat.',
  },
  {
    question: '¿Dónde veo precios y opciones de entrega?',
    answer:
      'Se confirman por WhatsApp junto con la disponibilidad y la forma de pago.',
  },
]

export function Home() {
  return (
    <>
      <section className="bg-cream-deep">
        <div className="mx-auto flex max-w-[1440px] flex-col lg:min-h-[650px] lg:flex-row">
          <div className="flex flex-col items-start gap-6 px-5 pb-12 pt-10 sm:px-10 lg:w-1/2 lg:justify-center lg:px-20 lg:py-16">
            <p className="eyebrow">Un momento con Esencia</p>
            <h1 className="max-w-[570px] font-display text-[54px] font-black leading-[1.03] tracking-[-0.02em] text-brown sm:text-[72px] lg:text-[88px]">
              Tu pausa más dulce.
            </h1>
            <p className="max-w-[490px] text-[19px] leading-[1.45] text-brown lg:text-[21px]">
              Elegí tus alfajores, combiná como quieras y mandanos tu pedido por
              WhatsApp.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <PillLink to="/pedido">Elegí tus alfajores ↗</PillLink>
              <a
                href="#como-pedir"
                className="inline-flex items-center gap-1 rounded-full px-2 py-2 text-[16px] font-medium text-ink underline-offset-4 transition-colors hover:text-brown hover:underline"
              >
                Así de simple ↓
              </a>
            </div>
            <p className="pt-2 text-[14px] leading-[1.45] text-ink">
              A tu gusto. A tu ritmo. Con Esencia.
            </p>
          </div>

          <div className="relative lg:w-1/2">
            <img
              src="/img/foto-landing.webp"
              alt="Alfajores de chocolate negro de Esencia servidos en un plato"
              className="h-[300px] w-full object-cover sm:h-[440px] lg:absolute lg:inset-0 lg:h-full"
            />
          </div>
        </div>
      </section>

      <div className="bg-brown px-5 py-4 text-center sm:px-10">
        <p className="text-[11px] font-semibold uppercase leading-[1.45] tracking-[0.08em] text-cream-deep sm:text-[14px]">
          Alfajores con Esencia · Vos elegís la combinación · Pedidos por
          WhatsApp
        </p>
      </div>

      <section
        id="alfajores"
        className="scroll-mt-6 bg-cream px-5 py-16 sm:px-10 lg:px-16 lg:py-20"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6">
          <p className="eyebrow">El antojo lo elegís vos</p>
          <h2 className="max-w-[600px] text-center font-display text-[38px] font-bold leading-[1.1] text-brown sm:text-[52px]">
            Uno nunca es suficiente.
          </h2>
          <p className="max-w-[480px] text-center text-[17px] leading-[1.45] text-ink sm:text-[19px]">
            Distintas versiones. El mismo momento dulce.
          </p>

          <div className="mt-4 grid w-full gap-8 md:grid-cols-3 md:gap-6">
            {landingVarieties.map((variety) => (
              <article key={variety.slug} className="flex flex-col gap-3.5">
                <img
                  src={variety.image}
                  alt={variety.alt}
                  loading="lazy"
                  className="aspect-[421/300] w-full rounded-[20px] object-cover"
                />
                <h3 className="font-display text-[26px] font-bold leading-[1.1] text-brown">
                  {variety.name}
                </h3>
                <p className="min-h-[50px] text-[17px] leading-[1.45] text-ink">
                  {variety.tagline}
                </p>
                <Link
                  to={`/pedido?v=${variety.slug}`}
                  className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-brown px-7 py-3.5 text-[17px] font-semibold leading-[1.45] text-cream-deep transition-colors hover:bg-[#3A1808]"
                >
                  Elegir esta variedad ↗
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-4 max-w-[540px] text-center text-[13px] leading-[1.45] text-brown">
            Catálogo ilustrativo: variedades e imágenes de ejemplo. Precios y
            disponibilidad a confirmar.
          </p>
        </div>
      </section>

      <section
        id="como-pedir"
        className="scroll-mt-6 bg-cream-deep px-5 py-14 sm:px-10 lg:px-16 lg:py-[72px]"
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-10">
          <h2 className="text-center font-display text-[36px] font-bold leading-[1.1] text-brown sm:text-[50px]">
            Del antojo al pedido.
          </h2>

          <div className="grid w-full gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="font-display text-[38px] font-bold leading-[1.1] text-brown">
                  {step.number}
                </span>
                <h3 className="font-display text-[22px] font-bold leading-[1.1] text-brown sm:text-[25px]">
                  {step.title}
                </h3>
                <p className="max-w-[390px] text-[17px] leading-[1.45] text-brown sm:text-[18px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand px-5 py-14 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-[72px]">
          <img
            src="/img/alfajores mini-landing.webp"
            alt="Alfajores de chocolate y de coco de Esencia"
            loading="lazy"
            className="aspect-[590/430] w-full rounded-[20px] object-cover"
          />
          <div className="flex flex-col items-start gap-6">
            <p className="eyebrow">Un momento con Esencia</p>
            <h2 className="max-w-[560px] font-display text-[38px] font-bold leading-[1.1] text-brown sm:text-[48px] lg:text-[56px]">
              Para compartir.
              <br />
              O no tanto.
            </h2>
            <p className="max-w-[535px] text-[18px] leading-[1.45] text-brown lg:text-[21px]">
              Hay pausas que piden algo dulce. Elegí una combinación para la
              sobremesa, para regalar o simplemente para vos.
            </p>
            <PillLink to="/pedido">Armar mi combinación ↗</PillLink>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-16 sm:px-10 lg:px-16 lg:py-[72px]">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[420px_1fr] lg:gap-[72px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[40px] font-bold leading-[1.1] text-brown sm:text-[48px]">
              Las dudas,
              <br />
              bien claritas.
            </h2>
            <p className="text-[18px] leading-[1.45] text-ink">
              Lo importante antes de elegir.
            </p>
          </div>

          <dl className="flex flex-col">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-line py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <dt className="text-[19px] font-semibold leading-[1.45] text-brown sm:text-[21px]">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-[16px] leading-[1.45] text-brown sm:text-[17px]">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <footer className="bg-brown px-5 py-14 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto flex max-w-[1312px] flex-col gap-10">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <h2 className="max-w-[820px] font-display text-[36px] font-bold leading-[1.1] text-cream-deep sm:text-[46px] lg:text-[52px]">
              ¿Le ponemos Esencia
              <br />
              a tu próxima pausa?
            </h2>
            <PillLink to="/pedido" variant="cream">
              Elegí tus alfajores ↗
            </PillLink>
          </div>
          <div className="flex flex-col justify-between gap-2 text-[13px] leading-[1.45] text-cream-deep sm:flex-row sm:text-[14px]">
            <span className="font-semibold uppercase tracking-[0.03em]">
              Esencia · Alfajores
            </span>
            <span>Elegí. Combiná. Disfrutá.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
