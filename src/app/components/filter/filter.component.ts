import { Component, Input, OnInit } from '@angular/core'

interface Filter {
  getFigure(): void
}

const VARIANT = 'variant'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../../styles/input/input.css','./filter.component.css']
})

export class FilterComponent implements OnInit{
  //CONSULTA: Le puse variant por defecto para evitar que si no le pasan parametro lanze error,
  //recomendarias late init o asi esta ok?
  @Input() type: string = 'variant'
  
  //TODO: Encontrar la forma mas optima para salvar el any 
  filter!: VariantFilter | SortedByFilter | any
  
  ngOnInit(): void {
    this.type === VARIANT ? this.filter = new VariantFilter() : this.filter = new SortedByFilter() 
  }
}

//TODO: Creo las clases de los filtros porque necesito metodos para obtener luego la info, que opinas?
export class VariantFilter implements Filter{
  from = 0
  to = 0
  onFire = false
  isPromise = false

  //CONSULTA: El filtro se ejecuta al cambiar o hay que agregar boton?
  //TODO: Obtener la figurita al generarse un cambio en el filtro de la vista
  getFigure = ():void => console.log(`Hola desde VariantFilter`)
}

export class SortedByFilter implements Filter{
  closest = true
  cheapest = false
  packQuantity = false
  closestOnly = false

  getFigure = ():void => console.log(`Hola desde SortedByFilter`)
}