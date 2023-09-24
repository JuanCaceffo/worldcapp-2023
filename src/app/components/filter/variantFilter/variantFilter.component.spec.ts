/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VariantFilterComponent } from './variantFilter.component'
import { FormsModule } from '@angular/forms'

describe('FilterVariantComponent', () => {
  let component: VariantFilterComponent
  let fixture: ComponentFixture<VariantFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VariantFilterComponent ],
      imports: [FormsModule],
    })
    fixture = TestBed.createComponent(VariantFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  //CONSULTAR
  // it('Inicialmente el filtro tiene los valores por defecto', () => {
  //   // const inputFrom = fixture.debugElement.nativeElement.querySelector(`[data-testid="inputFrom"]`)
  //   // console.log(inputFrom.textContent)
  //   // expect(+inputFrom.textContent).toBe(0)
  //   // component.filter.from = 1
  //   // fixture.detectChanges()
  //   // expect(+inputFrom.textContent).toBe(1)
  // })
})
