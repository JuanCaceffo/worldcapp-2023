import { IBaseFilter } from '../baseFilter.model'

export class VariantFilter implements IBaseFilter {
  // constructor(
  //   public from = 0,
  //   public to = 0,
  //   public onFire = false,
  //   public isPromise = false
  // ) {}

  //CONSULTA: El filtro se ejecuta al cambiar o hay que agregar boton?
  //TODO: Obtener la figurita al generarse un cambio en el filtro de la vista
  getFigure = (): void => console.log(`Hola desde VariantFilter`)
}
