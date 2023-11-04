import {ConcatenatePipe} from './concatenate-pipe.pipe'

describe('Pipe: ConcatenatePipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatenatePipe()
    expect(pipe).toBeTruthy()
  })
  it('debería concatenar dos strings', () => {
    const pipe = new ConcatenatePipe()
    const name = 'Alejo'
    const surname = 'Menini'
    const result = pipe.transform(name, surname)

    expect(result).toBe('Alejo Menini')
  })

  it('debería manejar valores indefinidos', () => {
    const pipe = new ConcatenatePipe()
    const result = pipe.transform(undefined, 'Menini')
    expect(result).toBe(' Menini')

    const result2 = pipe.transform('Alejo', undefined)
    expect(result2).toBe('Alejo ')
  })
})
