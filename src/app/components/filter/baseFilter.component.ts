import { Component, ContentChild, OnInit } from '@angular/core'
import { VariantFilterComponent } from './filterVariant/variantFilter.component'
import { SortedByFilterComponent } from './filterSortedBy/sortedByFilter.component'

type FilterType = VariantFilterComponent | SortedByFilterComponent
interface Filter {
  getFigure(): void
}

// const VARIANT = 'variant'
@Component({
  selector: 'app-baseFilter',
  templateUrl: './baseFilter.component.html',
  styleUrls: ['../../styles/input/input.css','./baseFilter.component.css']
})

export class BaseFilterComponent implements OnInit{
  @ContentChild('childFilter') childFilter!: FilterType

  filter!: FilterType
  title!: string
  
  ngOnInit(): void {
  }

  ngAfterContentInit(): void{
    this.title = this.childFilter.title
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
  radioOption = "closest"

  getFigure = ():void => console.log(`Hola desde SortedByFilter`)
}