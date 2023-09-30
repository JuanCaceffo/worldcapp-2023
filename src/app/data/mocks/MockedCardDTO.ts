import { CardDTO } from '../dto/CardDTO.dto'
const INITIAL_VALUE = 100
const MULIPLIER_EVENVALUE = { True: 1.1, False: 1.0 }
const MULIPLIER_ONFIRE = { True: 1.2, False: 1.0 }
const MULIPLIER_IMPRESION = { lowImpresion: 1.0, mediaNHigtImpresion: 0.85 }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockCardData: Array<CardDTO> = [
  {
    figureNumber: 22,
    isOnfire: true,
    initialValue: INITIAL_VALUE,
    mulitplierEvenNumber: MULIPLIER_EVENVALUE.True,
    multiplierOnFire: MULIPLIER_ONFIRE.True,
    multiplierImpresion: MULIPLIER_IMPRESION.lowImpresion,
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
    birth: '13/06/1993'
  },
  {
    figureNumber: 10,
    isOnfire: false,
    initialValue: INITIAL_VALUE,
    mulitplierEvenNumber: MULIPLIER_EVENVALUE.False,
    multiplierOnFire: MULIPLIER_ONFIRE.True,
    multiplierImpresion: MULIPLIER_IMPRESION.mediaNHigtImpresion,
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
    birth: '12/02/1988'
  }
]
