/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {SortedByFilterComponent} from './sorted-by-filter.component'
import {FormsModule} from '@angular/forms'
import {FieldComponent} from '../../fields/field.component'
import {InputFieldComponent} from '../../fields/input-field/input-field.component'
import {FieldLabelComponent} from '../../fields/field-label/field-label.component'
import {ControlFieldComponent} from '../../fields/control-field/control-field.component'

describe('FilterSortedByComponent', () => {
  let component: SortedByFilterComponent
  let fixture: ComponentFixture<SortedByFilterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        SortedByFilterComponent,
        FieldComponent,
        ControlFieldComponent,
        InputFieldComponent,
        FieldLabelComponent
      ]
    })
    fixture = TestBed.createComponent(SortedByFilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
