/* tslint:disable:no-unused-variable */
import {FullAddressPipe} from './full-address.pipe'
import {MarketDTO} from '../dtos/market.dto'

describe('Pipe: FullAddresse', () => {
  it('create an instance', () => {
    const pipe = new FullAddressPipe()
    expect(pipe).toBeTruthy()
  })
  it('debería devolver la dirección completa correctamente', () => {
    const pipe = new FullAddressPipe()
    const market: MarketDTO = {
      id: 1,
      nombre: 'Mi Mercado',
      tipoPuntoDeVenta: 'Tienda',
      direccion: {
        altura: 3434,
        calle: 'Calle Libertador',
        ubiGeografica: 'Coordenadas'
      },
      distancia: 10,
      stockSobres: 50,
      pendientes: false,
      precioSobres: 1.5
    }

    const result = pipe.transform(market)

    expect(result).toBe('Calle Libertador 3434')
  })
})
