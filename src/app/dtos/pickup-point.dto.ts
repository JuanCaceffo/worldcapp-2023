export interface PickupPointDTO {
  id: number
  nombre: string
  tipoPuntoDeVenta: string
  direccion: {
    altura: number
    calle: string
    ubiGeografica: number
  }
  distancia: number
  stockSobres: number
  pendientes: boolean
  precioSobres: number
}
