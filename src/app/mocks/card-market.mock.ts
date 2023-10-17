import {PickupPointDTO} from 'src/app/dtos/pickup-point.dto'

export const mockedCardMarket: Array<PickupPointDTO> = [
  {
    id: 1,
    direccion: {
      calle: 'Calle falsa',
      altura: 11,
      distancia: 2,
      geoLocalizacion: 3
    },
    stockSobres: 2,
    precioSobres: 1,
    nombre: 'Test Mock 1',
    pendientes: true,
    tipoPuntoDeVenta: 'Kioscos'
  },
  {
    id: 2,
    direccion: {
      calle: 'Alpatacal',
      altura: 123,
      distancia: 2,
      geoLocalizacion: 3
    },
    stockSobres: 2,
    precioSobres: 1,
    nombre: 'Test Mock 2',
    pendientes: true,
    tipoPuntoDeVenta: 'Librerias'
  },
  {
    id: 3,
    direccion: {
      calle: 'Urquiza',
      altura: 1231,
      distancia: 12,
      geoLocalizacion: 12
    },
    stockSobres: 12,
    precioSobres: 1,
    nombre: 'Test Mock 3',
    pendientes: true,
    tipoPuntoDeVenta: 'Supermercados'
  },
  {
    id: 4,
    direccion: {
      calle: 'av. Libertador',
      altura: 3500,
      distancia: 5,
      geoLocalizacion: 5
    },
    stockSobres: 5,
    precioSobres: 5,
    nombre: 'Test Mock 4',
    pendientes: true,
    tipoPuntoDeVenta: 'Supermercados'
  },
  {
    id: 5,
    direccion: {
      calle: 'av. Figeroa Alcorta',
      altura: 12,
      distancia: 1,
      geoLocalizacion: 1
    },
    stockSobres: 1,
    precioSobres: 1,
    nombre: 'Test Mock 5',
    pendientes: true,
    tipoPuntoDeVenta: 'Supermercados'
  },
  {
    id: 6,
    direccion: {
      calle: 'Lascano',
      altura: 545,
      distancia: 2,
      geoLocalizacion: 2
    },
    stockSobres: 2,
    precioSobres: 2,
    nombre: 'Test Mock 6',
    pendientes: true,
    tipoPuntoDeVenta: 'Supermercados'
  }
]
