import { FieldComponent } from 'src/app/components/fields/field.component'
import { TestBed, fakeAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FieldLabelComponent } from '../field-label/field-label.component'
import { ControlFieldComponent } from './control-field.component'

describe('Control Field Component', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FieldComponent, ControlFieldComponent, FieldLabelComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(ControlFieldComponent)
    const controlField = fixture.debugElement.componentInstance
    expect(controlField).toBeTruthy()
  })
})