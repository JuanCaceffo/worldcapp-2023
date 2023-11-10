import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ToastMessageComponent} from './toastMessage.component'

describe('ToastMessageComponent', () => {
  let component: ToastMessageComponent
  let fixture: ComponentFixture<ToastMessageComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToastMessageComponent]
    })

    fixture = TestBed.createComponent(ToastMessageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('debería mostrar el elemento con la clase "success" si isSuccess es verdadero', () => {
    component.titleType = 'success'
    fixture.detectChanges()

    const successToastElement =
      fixture.nativeElement.querySelector('.toast.success')
    expect(successToastElement).toBeTruthy()
  })

  it('no debería mostrar el elemento con la clase "success" si isSuccess es falso', () => {
    component.titleType = 'error'
    fixture.detectChanges()

    const successToastElement =
      fixture.nativeElement.querySelector('.toast.success')
    expect(successToastElement).toBeNull()
  })

  it('debería mostrar el elemento con la clase "error" si isError es verdadero', () => {
    component.titleType = 'error'
    fixture.detectChanges()

    const errorToastElement =
      fixture.nativeElement.querySelector('.toast.error')
    expect(errorToastElement).toBeTruthy()
  })
})
