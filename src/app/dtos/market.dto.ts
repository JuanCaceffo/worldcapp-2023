export interface MarketDTO {
  id: number
  nombre: string
  tipoPuntoDeVenta: string
  direccion: {
    altura: number
    calle: string
    ubiGeografica: string
  }
  distancia: number
  stockSobres: number
  pendientes: boolean
  precioSobres: number
}
