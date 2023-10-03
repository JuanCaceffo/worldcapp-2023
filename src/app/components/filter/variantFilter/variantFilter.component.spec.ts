/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VariantFilterComponent } from './variantFilter.component'
import { FormsModule } from '@angular/forms'
import { InputFieldComponent } from '../../fields/input-field/input-field.component'
import { FieldLabelComponent } from '../../fields/field-label/field-label.component'
import { getByTestId } from 'src/app/helpers/test.helper'
import { ControlFieldComponent } from '../../fields/control-field/control-field.component'

describe('FilterVariantComponent', () => {
  let component: VariantFilterComponent
  let fixture: ComponentFixture<VariantFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VariantFilterComponent,
        InputFieldComponent,
        FieldLabelComponent,
        ControlFieldComponent
      ],
      imports: [FormsModule]
    })
    fixture = TestBed.createComponent(VariantFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Inicialmente los inputs numericos tienen los valores por defecto', async () => {
    const inputFrom = getByTestId(fixture, 'inputFrom')
    const inputTo = getByTestId(fixture, 'inputTo')

    await fixture.whenStable()
    expect(
      (inputFrom.childNodes[1].firstChild as HTMLInputElement).valueAsNumber
    ).toBe(0)
    expect(
      (inputTo.childNodes[1].firstChild as HTMLInputElement).valueAsNumber
    ).toBe(0)
  })

  it('Cambio de valor de los inputs numericos', async () => {
    const inputFrom = getByTestId(fixture, 'inputFrom')
    const inputTo = getByTestId(fixture, 'inputTo')

    component.from = 1
    component.to = 2

    fixture.detectChanges()
    await fixture.whenStable()

    expect(
      (inputFrom.childNodes[1].firstChild as HTMLInputElement).valueAsNumber
    ).toBe(1)
    expect(
      (inputTo.childNodes[1].firstChild as HTMLInputElement).valueAsNumber
    ).toBe(2)
  })

  it('Inicialmente los checkbox tienen los valores por defecto', async () => {
    const onFire = getByTestId(fixture, 'checkboxOnFire')
    const isPromise = getByTestId(fixture, 'checkboxIsPromise')

    fixture.detectChanges()
    await fixture.whenStable()

    expect((onFire.childNodes[0].firstChild as HTMLInputElement).value).toBe(
      'false'
    )
    expect((isPromise.childNodes[0].firstChild as HTMLInputElement).value).toBe(
      'false'
    )
  })

  it('Cambio de valor de los checkbox al hacerles click', async () => {
    const onFire = getByTestId(fixture, 'checkboxOnFire')
    const isPromise = getByTestId(fixture, 'checkboxIsPromise')

    component.onFire = true
    component.isPromise = true

    fixture.detectChanges()
    await fixture.whenStable()

    expect((onFire.childNodes[0].firstChild as HTMLInputElement).value).toBe(
      'true'
    )
    expect((isPromise.childNodes[0].firstChild as HTMLInputElement).value).toBe(
      'true'
    )
  })
})
