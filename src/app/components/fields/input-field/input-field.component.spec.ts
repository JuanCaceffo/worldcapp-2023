import { FieldComponent } from 'src/app/components/fields/field.component'
import { TestBed, fakeAsync } from '@angular/core/testing'
import { InputFieldComponent } from './input-field.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FieldLabelComponent } from '../field-label/field-label.component'

describe('Input Field Component', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FieldComponent, InputFieldComponent, FieldLabelComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(InputFieldComponent)
    const input = fixture.debugElement.componentInstance
    expect(input).toBeTruthy()
  })
})
