type Player = {
  name: string
  surname: string
  weight: number
  height: number
  shirtNumber: number
  birth: string
  age: number
  nationalTeam: string
  positon: string
  quote: number
}
export interface CardDTO {
  figureNumber: number
  isOnfire: boolean
  isPromise: boolean
  player: Player
  initialValue: number
  multiplierImpresion: number
  multiplierOnFire: number
  mulitplierEvenNumber: number
}
