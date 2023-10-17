export interface PickupPointDTO {
  id: number
  nombre: string
  tipoPuntoDeVenta: string
  direccion: {
    calle: string
    altura: number
    distancia: number
    geoLocalizacion: number
  }
  stockSobres: number
  pendientes: boolean
  precioSobres: number
}
