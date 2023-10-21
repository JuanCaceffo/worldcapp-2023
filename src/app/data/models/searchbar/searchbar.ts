import { mockCardData } from './../../mocks/MockedCardDTO'

export class Searchbar {

  search(aBuscar: string) {
    // Object.values(data).forEach((value) => {
    //   console.log(value)
    // })

    const buscado = mockCardData.filter((figurita) => Object.values(figurita).some(valor => typeof valor === 'string' && valor.toLowerCase().includes(aBuscar.toLowerCase())))
    console.log(buscado)
    return buscado
  }
}

export const searchbar = new Searchbar()