import {TestBed, fakeAsync} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {FieldLabelComponent} from '../field-label/field-label.component'
import {SelectFieldComponent} from './select-field.component'

describe('Select Field Component', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SelectFieldComponent, FieldLabelComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(SelectFieldComponent)
    const select = fixture.debugElement.componentInstance
    expect(select).toBeTruthy()
  })
})
