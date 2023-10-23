import { TestBed, fakeAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FormComponent } from './form.component'

describe('CustomField', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FormComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(FormComponent)
    const form = fixture.debugElement.componentInstance
    expect(form).toBeTruthy()
  })
})
