import { IBaseFilter } from "../baseFilter.model"

export class SortedByFilter implements IBaseFilter{
    radioOption = "closest"
  
    getFigure = ():void => console.log(`Hola desde SortedByFilter`)
  }