import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {VariantFilterComponent} from './variant-filter.component'
import {FormsModule} from '@angular/forms'
import {InputFieldComponent} from '../../fields/input-field/input-field.component'
import {FieldLabelComponent} from '../../fields/field-label/field-label.component'
import {ControlFieldComponent} from '../../fields/control-field/control-field.component'
import {FieldComponent} from '../../fields/field.component'

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
})
