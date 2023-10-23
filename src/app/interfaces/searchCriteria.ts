export interface PickUpPointSearch {
  palabraClave: string,
  masBarato: boolean,
  masSobre: boolean,
  menorDistancia: boolean,
  soloMasCercanos: boolean
}

export interface CardSearch {
  palabraClave: string,
  onFire: boolean,
  esPromesa: boolean,
  cotizacionInicial: number,
  cotizacionFinal: number
}

