import { IconFieldComponent } from './../fields/icon-field/icon-field.component'
import { FieldComponent } from 'src/app/components/fields/field.component'
import { TestBed, fakeAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { SelectFieldComponent } from '../fields/select-field/select-field.component'
import { InputFieldComponent } from '../fields/input-field/input-field.component'
import { FieldLabelComponent } from '../fields/field-label/field-label.component'
import { FormComponent } from './form.component'

describe('CustomField', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        FieldComponent,
        InputFieldComponent,
        FieldLabelComponent,
        SelectFieldComponent,
        IconFieldComponent,
        FormComponent
      ]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(FormComponent)
    const form = fixture.debugElement.componentInstance
    expect(form).toBeTruthy()
  })
})
