import { CardDTO } from '../dto/CardDTO.dto'
const INITIAL_VALUE = 100
const DATE_1 = '1993-06-13'
const DATE_2 = '1998-12-02'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockCardData: Array<CardDTO> = [
  {
    figureNumber: 22,
    isOnfire: true,
    initialValue: INITIAL_VALUE,
    levelOfImpresion: 'low',
    isPromise: true,
    weight: 70,
    name: 'gonzalo',
    surname: 'martinez',
    shirtNumber: 22,
    quote: 9000000,
    height: 1.72,
    nationalTeam: 'Argentina',
    positon: 'mediocampista',
    age: 30,
    birth: DATE_1,
    owner: 'ale menis'
  },
  {
    figureNumber: 10,
    isOnfire: false,
    initialValue: INITIAL_VALUE,
    levelOfImpresion: 'high',
    isPromise: false,
    weight: 75,
    name: 'Nicolas',
    surname: 'Otamendi',
    shirtNumber: 3,
    quote: 1200000,
    height: 1.83,
    nationalTeam: 'Argentina',
    positon: 'Defensor',
    age: 35,
    birth: DATE_2,
    owner: 'juan cacho caceffo'
  }
]
