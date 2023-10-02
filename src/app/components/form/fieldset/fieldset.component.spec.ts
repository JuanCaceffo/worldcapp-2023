/* tslint:disable:no-unused-variable */
import { TestBed, fakeAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FieldsetComponent } from './fieldset.component'

describe('Fieldset tests', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FieldsetComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(FieldsetComponent)
    const form = fixture.debugElement.componentInstance
    expect(form).toBeTruthy()
  })
})
