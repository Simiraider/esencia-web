export type Variety = {
  slug: string
  name: string
  messageName: string
  /** Nombre en singular para el mensaje de WhatsApp. */
  singularMessageName?: string
  description: string
  tagline: string
  image: string
  imageAlt: string
  /** Unidades que suma cada click en el contador. */
  step: number
  /** Precio por unidad en pesos. `null` = se confirma por WhatsApp. */
  price: number | null
  /** Texto chico debajo del precio. */
  note?: string
}

export const varieties: Variety[] = [
  {
    slug: 'chocolate',
    name: 'Chocolate negro',
    messageName: 'Alfajores de Chocolate',
    singularMessageName: 'Alfajor de Chocolate',
    description:
      'Cobertura de chocolate negro, dulce de leche con relleno hecho de nueces y miel.',
    tagline: 'Cobertura intensa de baño amargo, con un twist dulce.',
    image: '/img/alfajores chocolate.webp',
    imageAlt: 'Alfajores de chocolate negro de Esencia',
    step: 1,
    price: null,
  },
  {
    slug: 'coco',
    name: 'Coco',
    messageName: 'Alfajores de Coco',
    singularMessageName: 'Alfajor de Coco',
    description:
      'Masa de alfajor clásica con dulce de leche y coco rallado en lugar de chocolate.',
    tagline: 'La masa de siempre, con coco rallado en vez de chocolate.',
    image: '/img/alfajores coco.webp',
    imageAlt: 'Alfajores con coco rallado de Esencia',
    step: 1,
    price: null,
  },
  {
    slug: 'mini-chocolate',
    name: 'Alfajores mini (Chocolate)',
    messageName: 'Alfajores mini de Chocolate',
    description:
      'Mini alfajores de chocolate negro, se venden por 3 unidades.',
    tagline: 'Mismo sabor, pero en versión mini. Para darte un gustito.',
    image: '/img/alfajores mini chocolate.webp',
    imageAlt: 'Mini alfajores de chocolate de Esencia',
    step: 3,
    price: null,
    note: 'Se venden por 3 u.',
  },
]

export const landingVarieties = [
  {
    slug: 'chocolate',
    name: 'Chocolate negro',
    tagline: 'Cobertura intensa de baño amargo, con un twist dulce.',
    image: '/img/alfajores chocolate.webp',
    alt: 'Alfajores de chocolate negro de Esencia',
  },
  {
    slug: 'coco',
    name: 'Coco',
    tagline: 'La masa de siempre, con coco rallado en vez de chocolate.',
    image: '/img/alfajores coco.webp',
    alt: 'Alfajores con coco rallado de Esencia',
  },
  {
    slug: 'mini',
    name: 'Alfajores mini',
    tagline: 'Mismo sabor, pero con diferente esencia. Para darte un gustito.',
    image: '/img/alfajores mini chocolate.webp',
    alt: 'Mini alfajores de chocolate de Esencia',
  },
]

export function getVariety(slug: string) {
  return varieties.find((variety) => variety.slug === slug)
}
