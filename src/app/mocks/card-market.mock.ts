import {PickupPointDTO} from 'src/app/dtos/pickup-point.dto'

export const mockedCardMarket: Array<PickupPointDTO> = [
  {
    id: 1,
    direccion: {
      streetName: 'Calle falsa',
      streetNumber: 11,
      distance: 2,
      geoLocation: 3
    },
    envelopeStock: 2,
    envelopePrice: 1,
    name: 'Test Mock 1',
    pendingOrders: true,
    type: 'Kiosko'
  },
  {
    id: 2,
    direccion: {
      streetName: 'Alpatacal',
      streetNumber: 123,
      distance: 2,
      geoLocation: 3
    },
    envelopeStock: 2,
    envelopePrice: 1,
    name: 'Test Mock 2',
    pendingOrders: true,
    type: 'Libreria'
  },
  {
    id: 3,
    direccion: {
      streetName: 'Urquiza',
      streetNumber: 1231,
      distance: 12,
      geoLocation: 12
    },
    envelopeStock: 12,
    envelopePrice: 1,
    name: 'Test Mock 3',
    pendingOrders: true,
    type: 'Supermercado'
  },
  {
    id: 4,
    direccion: {
      streetName: 'av. Libertador',
      streetNumber: 3500,
      distance: 5,
      geoLocation: 5
    },
    envelopeStock: 5,
    envelopePrice: 5,
    name: 'Test Mock 4',
    pendingOrders: true,
    type: 'Supermercado'
  },
  {
    id: 5,
    direccion: {
      streetName: 'av. Figeroa Alcorta',
      streetNumber: 12,
      distance: 1,
      geoLocation: 1
    },
    envelopeStock: 1,
    envelopePrice: 1,
    name: 'Test Mock 5',
    pendingOrders: true,
    type: 'Supermercado'
  },
  {
    id: 6,
    direccion: {
      streetName: 'Lascano',
      streetNumber: 545,
      distance: 2,
      geoLocation: 2
    },
    envelopeStock: 2,
    envelopePrice: 2,
    name: 'Test Mock 6',
    pendingOrders: true,
    type: 'Supermercado'
  }
]
