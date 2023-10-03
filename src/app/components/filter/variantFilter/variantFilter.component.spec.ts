/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'
import { VariantFilterComponent } from './variantFilter.component'
import { FormsModule } from '@angular/forms'
import { InputFieldComponent } from '../../fields/input-field/input-field.component'
import { FieldLabelComponent } from '../../fields/field-label/field-label.component'
import { getByTestId } from 'src/app/helpers/test.helper'
import { ControlFieldComponent } from '../../fields/control-field/control-field.component'
import { FieldComponent } from '../../fields/field.component'

describe('FilterVariantComponent', () => {
  let component: VariantFilterComponent
  let fixture: ComponentFixture<VariantFilterComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        VariantFilterComponent,
        FieldComponent,
        InputFieldComponent,
        FieldLabelComponent,
        ControlFieldComponent
      ]      
    }).compileComponents()
    fixture = TestBed.createComponent(VariantFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Inicialmente los inputs numericos tienen los valores por defecto', () => {
    const inputFrom = getByTestId(fixture, 'inputFrom') as HTMLInputElement
    const inputTo = getByTestId(fixture, 'inputTo') as HTMLInputElement
    
    expect(inputFrom.valueAsNumber).toBe(0)
    expect(inputTo.valueAsNumber).toBe(0)
  })

  it('Cambio de valor de los inputs numericos', () => {
    const inputFrom = getByTestId(fixture, 'inputFrom') as HTMLInputElement
    const inputTo = getByTestId(fixture, 'inputTo') as HTMLInputElement
    
    component.from = '1'
    component.to = '2'

    // console.log(inputFrom.value)
    // console.log(component.from)
    
    fixture.detectChanges()
        
    expect(inputFrom.valueAsNumber).toBe(1)
    expect(inputTo.valueAsNumber).toBe(2)
  })

  it('Inicialmente los checkbox tienen los valores por defecto', () => {
    const onFire = getByTestId(fixture, 'checkboxOnFire') as HTMLInputElement
    const isPromise = getByTestId(fixture, 'checkboxIsPromise') as HTMLInputElement    
    
    expect(onFire.checked).toBe(false)
    expect(isPromise.checked).toBe(false)
  })

  it('Cambio de valor de los checkbox al hacerles click', () => {
    const onFire = getByTestId(fixture, 'checkboxOnFire') as HTMLInputElement
    const isPromise = getByTestId(fixture, 'checkboxIsPromise') as HTMLInputElement

    component.onFire = true
    component.isPromise = true
    
    fixture.detectChanges()

    console.log(onFire.checked)
    console.log(onFire.value)
   
    expect(onFire.checked).toBe(true)
    expect(isPromise.checked).toBe(true)
  })
})


