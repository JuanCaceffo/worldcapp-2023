import { IBaseFilter } from '../baseFilter.model'

export class VariantFilter implements IBaseFilter {
  //   from = 0,
  //   to = 0,
  //   onFire = false,
  //   isPromise = false

  //TODO: Obtener la figurita al generarse un cambio en el filtro de la vista
  getFigure = (): void => console.log(`Hola desde VariantFilter`)
}
