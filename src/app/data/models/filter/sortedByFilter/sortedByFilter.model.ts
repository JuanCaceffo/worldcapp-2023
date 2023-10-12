import { IBaseFilter } from "../baseFilter.model"

export class SortedByFilter implements IBaseFilter{
    radioOption = "closest"

    getFilterValue(event: Event){
      const targetElement = (event.target as HTMLInputElement)
      this.radioOption = targetElement.value
    }

    getFigure = ():void => console.log(`Hola desde SortedByFilter`)
  }