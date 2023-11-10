import {MarketDTO} from 'src/app/dtos/market.dto'

export const mockedCardMarket: Array<MarketDTO> = [
  {
    id: 1,
    nombre: 'Test Mock 1',
    direccion: {
      calle: 'Calle falsa',
      altura: 11,
      ubiGeografica: 'x: 2.1234, y: 54.1234'
    },
    distancia: 2,
    stockSobres: 2,
    precioSobres: 1,
    pendientes: true,
    tipoPuntoDeVenta: 'Kioscos'
  },
  {
    id: 2,
    direccion: {
      calle: 'Alpatacal',
      altura: 123,
      ubiGeografica: 'x: 21.1234, y: 4.1234'
    },
    distancia: 2,
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
      ubiGeografica: 'x: 22.1234, y: 54.1234'
    },
    distancia: 12,
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
      ubiGeografica: 'x: 2.1234, y: 52.1214'
    },
    distancia: 5,
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
      ubiGeografica: 'x: 21.3334, y: 4.1234'
    },
    distancia: 1,
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
      ubiGeografica: 'x: 44.2224, y: 5.1224'
    },
    distancia: 2,
    stockSobres: 2,
    precioSobres: 2,
    nombre: 'Test Mock 6',
    pendientes: true,
    tipoPuntoDeVenta: 'Supermercados'
  }
]
