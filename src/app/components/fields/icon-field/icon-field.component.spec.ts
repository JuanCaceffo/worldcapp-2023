import { ComponentFixture, TestBed } from '@angular/core/testing'
import { IconFieldComponent } from './icon-field.component'
import { InputFieldComponent } from '../input-field/input-field.component'
import { FieldLabelComponent } from '../field-label/field-label.component'
import { routingComponents } from 'src/app/app-routing.module'
import { FormsModule } from '@angular/forms'

describe('IFieldComponent', () => {
  let component: IconFieldComponent
  let fixture: ComponentFixture<IconFieldComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        routingComponents,
        IconFieldComponent,
        InputFieldComponent,
        FieldLabelComponent
      ],
      imports: [FormsModule]
    })
    fixture = TestBed.createComponent(IconFieldComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
