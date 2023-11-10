import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing'
import {VariantFilterComponent} from './variant-filter.component'
import {FormsModule} from '@angular/forms'
import { getByTestId } from 'src/app/helpers/test.helper'

describe('FilterVariantComponent', () => {
  let filtro: VariantFilterComponent
  let fixture: ComponentFixture<VariantFilterComponent>
  let from: HTMLInputElement
  let to: HTMLInputElement
  let onFire: HTMLInputElement
  let promise: HTMLInputElement
  const valorInicial = 150
  const valorFinal = 200

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [VariantFilterComponent]
    }).compileComponents()
    //Arrage
    fixture = TestBed.createComponent(VariantFilterComponent)
    filtro = fixture.componentInstance
    from = getByTestId(fixture, 'inputFrom') as HTMLInputElement
    to = getByTestId(fixture, 'inputTo') as HTMLInputElement
    onFire = getByTestId(fixture, 'checkboxOnFire') as HTMLInputElement
    promise = getByTestId(fixture, 'checkboxIsPromise') as HTMLInputElement
    fixture.detectChanges()    
  }))

  it('should create', () => {
    expect(filtro).toBeTruthy()
  })

  it('la valoración debe iniciar en 0', () => {
    expect(from.value).toEqual('0')
    expect(to.value).toEqual('0')
  })

  it('los checkbox deberían iniciar unchecked', () => {
    expect(onFire.checked).toEqual(false)
    expect(promise.checked).toEqual(false)
  })

  it('actualización del valor desde el controlador', fakeAsync(() => {        
    //Act
    filtro.filter.onFire = true
    filtro.filter.esPromesa = true
    filtro.filter.cotizacionInicial = valorInicial
    filtro.filter.cotizacionFinal = valorFinal
    fixture.detectChanges()
    tick()    
    //Assert
    expect(from.value).toEqual('150')
    expect(to.value).toEqual('200')
    expect(onFire.checked).toBe(true)
    expect(promise.checked).toBe(true)
  }))

  it('actualización del valor desde la vista', () => {      
    //Act    
    from.value = valorInicial.toString()
    from.dispatchEvent(new Event('input'))
    to.value = valorFinal.toString()
    to.dispatchEvent(new Event('input'))
    onFire.checked = true
    onFire.dispatchEvent(new Event('change'))    
    promise.checked = true
    promise.dispatchEvent(new Event('change'))    
    // //Assert    
    expect(filtro.filter.cotizacionInicial).toEqual(valorInicial)    
    expect(filtro.filter.cotizacionFinal).toEqual(valorFinal)    
    expect(filtro.filter.onFire).toEqual(true)
    expect(filtro.filter.esPromesa).toEqual(true)
  })

  it('el valor de desde cambia el mínimo de hasta', () => {  
    //Act    
    from.value = valorInicial.toString()    
    from.dispatchEvent(new Event('input'))        
    //Assert
    expect(filtro.filter.cotizacionFinal).toEqual(150)    
  })

  it('el valor de hasta no puede ser menor que el de desde', () => {  
    //Act    
    from.value = valorInicial.toString()
    from.dispatchEvent(new Event('input'))       
    to.value = (100).toString()
    to.dispatchEvent(new Event('input'))
    // //Assert
    expect(filtro.filter.cotizacionFinal).toEqual(valorInicial)    
  })
})
