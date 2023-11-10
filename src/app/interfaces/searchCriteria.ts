interface SearchBarProps {
  palabraClave: string
}

export interface StoreSearchProps extends SearchBarProps {
  opcionElegida: OrderBy
}

export interface CardSearchProps extends SearchBarProps {
  onFire: boolean
  esPromesa: boolean
  cotizacionInicial: number
  cotizacionFinal: number
}

export enum OrderBy {
  menorDistancia = 'Menor Distancia',
  masBarato = 'Más Barato',
  masSobres = 'Más Sobres',
  soloMasCercanos = 'Sólo más Cercanos'
}
