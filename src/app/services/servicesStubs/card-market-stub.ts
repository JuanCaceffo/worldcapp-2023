import { PickupPointDTO } from 'src/app/interfaces/pickupPointDTO'

export class CardMarketStub implements PickupPointDTO {
  address = 'Calle falsa 123'
  distance = 2
  envelopeStock = 2
  envelopePrice = 1
  geoLocation = 3
  name = 'TestStub'
  pendingOrders = true
  type = 'Supermercado'
}
