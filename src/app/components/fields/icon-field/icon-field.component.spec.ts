import { FieldComponent } from 'src/app/components/fields/field.component'
import { TestBed, fakeAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FieldLabelComponent } from '../field-label/field-label.component'
import { InputFieldComponent } from '../input-field/input-field.component'
import { IconFieldComponent } from './icon-field.component'

describe('Icon Field Component', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FieldComponent, IconFieldComponent ,InputFieldComponent, FieldLabelComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(IconFieldComponent)
    const iconField = fixture.debugElement.componentInstance
    expect(iconField).toBeTruthy()
  })
})