/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VariantFilterComponent } from './variantFilter.component'
import { FormsModule } from '@angular/forms'
import { InputFieldComponent } from '../../fields/input-field/input-field.component'
import { FieldLabelComponent } from '../../fields/field-label/field-label.component'

describe('FilterVariantComponent', () => {
  let component: VariantFilterComponent
  let fixture: ComponentFixture<VariantFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        VariantFilterComponent,
        InputFieldComponent,
        FieldLabelComponent
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

  it('Inicialmente el filtro tiene los valores por defecto', () => {
    const inputFrom = fixture.debugElement.nativeElement.querySelector(
      `[data-testid="inputFrom"]`
    )
    expect(+inputFrom.textContent).toBe(0)
    component.from = 1
    fixture.detectChanges()
    expect(+inputFrom.textContent).toBe(1)
  })
})
