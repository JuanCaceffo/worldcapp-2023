import { FieldComponent } from 'src/app/components/fields/field.component'
import { TestBed, fakeAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FieldLabelComponent } from '../field-label/field-label.component'
import { SelectFieldComponent } from './select-field.component'

describe('CustomField', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FieldComponent, SelectFieldComponent, FieldLabelComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(SelectFieldComponent)
    const select = fixture.debugElement.componentInstance
    expect(select).toBeTruthy()
  })
})