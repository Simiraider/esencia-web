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
  },
  {
    slug: 'maicena',
    name: 'Maicena',
    messageName: 'Alfajores de Maicena',
    singularMessageName: 'Alfajor de Maicena',
    description: 'Tapitas de maicena, dulce de leche y coco.',
    tagline: 'Un clásico, hecho con coco rallado.',
    image: '/img/alfajores maicena.webp',
    imageAlt: 'Alfajores de maicena con coco de Esencia',
    step: 1,
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
    note: 'Se venden por 3 u.',
  },
  {
    slug: 'mini-maicena',
    name: 'Alfajores mini (Maicena)',
    messageName: 'Alfajores mini de Maicena',
    description:
      'Mini alfajores de maicena con coco, se venden por 3 unidades.',
    tagline: 'El clásico de maicena en versión mini.',
    image: '/img/alfajores mini maicena.webp',
    imageAlt: 'Mini alfajores de maicena de Esencia',
    step: 3,
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
    slug: 'maicena',
    name: 'Maicena',
    tagline: 'Un clásico, hecho con coco rallado.',
    image: '/img/alfajores maicena.webp',
    alt: 'Alfajores de maicena con coco de Esencia',
  },
  {
    slug: 'mini',
    name: 'Alfajores mini',
    tagline: 'Mismo sabor, pero con diferente esencia. Para darte un gustito.',
    image: '/img/alfajores mini-landing.webp',
    alt: 'Alfajores mini de chocolate y de maicena de Esencia',
  },
]

export function getVariety(slug: string) {
  return varieties.find((variety) => variety.slug === slug)
}
