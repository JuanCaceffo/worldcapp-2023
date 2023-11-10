/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing'
import {SortedByFilterComponent} from './sorted-by-filter.component'
import {FormsModule} from '@angular/forms'
import {getByTestId} from 'src/app/helpers/test.helper'
import { OrderBy } from 'src/app/interfaces/searchCriteria'

describe('FilterSortedByComponent', () => {
  let filtro: SortedByFilterComponent
  let fixture: ComponentFixture<SortedByFilterComponent>
  let menorDistancia: HTMLInputElement
  let masBarato: HTMLInputElement
  let masSobres: HTMLInputElement
  let soloMasCercanos: HTMLInputElement

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SortedByFilterComponent]
    })
    //Arrange
    fixture = TestBed.createComponent(SortedByFilterComponent)
    filtro = fixture.componentInstance
    fixture.detectChanges()
    menorDistancia = getByTestId(fixture, 'MenorDistancia') as HTMLInputElement    
    masBarato = getByTestId(fixture, 'MasBarato') as HTMLInputElement
    masSobres = getByTestId(fixture, 'MasSobres') as HTMLInputElement
    soloMasCercanos = getByTestId(fixture,'SoloMasCercanos') as HTMLInputElement    
  }))

  it('should create', () => {
    expect(filtro).toBeTruthy()
  })

  it('debe iniciar en Menor Distancia', () => {
    //assert    
    expect(filtro.filter.opcionElegida).toEqual('Menor Distancia')
    expect(menorDistancia.checked).toBe(true)
  })

  it('actualización del valor desde el controlador', fakeAsync(() => {   
    //Act
    filtro.filter.opcionElegida = OrderBy.masBarato    
    fixture.detectChanges()
    tick()
    //Assert 
    expect(masBarato.checked).toBe(true)
    
    //Act
    filtro.filter.opcionElegida = OrderBy.masSobres    
    fixture.detectChanges()
    tick()
    //Assert 
    expect(masSobres.checked).toBe(true)

    //Act
    filtro.filter.opcionElegida = OrderBy.soloMasCercanos    
    fixture.detectChanges()
    tick()
    //Assert 
    expect(soloMasCercanos.checked).toBe(true) 
    
    //Act
    filtro.filter.opcionElegida = OrderBy.menorDistancia    
    fixture.detectChanges()
    tick()
    //Assert 
    expect(menorDistancia.checked).toBe(true) 
  }))

  it('actualización del valor desde la vista', () => {      
    //Act    
    masBarato.checked = true
    masBarato.dispatchEvent(new Event('change'))        
    // //Assert    
    expect(filtro.filter.opcionElegida).toEqual('Más Barato')
    
    //Act    
    masSobres.checked = true
    masSobres.dispatchEvent(new Event('change'))        
    // //Assert    
    expect(filtro.filter.opcionElegida).toEqual('Más Sobres')        
    
    //Act    
    soloMasCercanos.checked = true
    soloMasCercanos.dispatchEvent(new Event('change'))        
    // //Assert    
    expect(filtro.filter.opcionElegida).toEqual('Sólo más Cercanos')
    
    //Act    
    menorDistancia.checked = true
    menorDistancia.dispatchEvent(new Event('change'))        
    // //Assert    
    expect(filtro.filter.opcionElegida).toEqual('Menor Distancia')
  })
})
