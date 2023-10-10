export interface PickupPointDTO {
  address: string
  distance: number
  envelopeStock: number
  envelopePrice: number
  geoLocation: number
  name: string
  pendingOrders: boolean
  type: string
}
