import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {FormsModule} from '@angular/forms'
import { ErrorToastComponent } from './errorToast.component'

describe('FilterVariantComponent', () => {
  let errorToast: ErrorToastComponent
  let fixture: ComponentFixture<ErrorToastComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ErrorToastComponent]
    }).compileComponents()
    fixture = TestBed.createComponent(ErrorToastComponent)
    errorToast = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(errorToast).toBeTruthy()
  })
})

