import { IconFieldComponent } from './../../components/fields/icon-field/icon-field.component'
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'
import { LoginComponent } from './login.component'
import { LogoComponent } from 'src/app/components/logo/logo.component'
import { InputFieldComponent } from 'src/app/components/fields/input-field/input-field.component'
import { FieldLabelComponent } from 'src/app/components/fields/field-label/field-label.component'
import { FieldComponent } from 'src/app/components/fields/field.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, LogoComponent, IconFieldComponent, InputFieldComponent, FieldLabelComponent, FieldComponent]
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  const getByTestId = (testId: string) => {
    return fixture.debugElement.nativeElement.querySelector(
      `[data-testid="${testId}"]`
    ) as HTMLElement
  }

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  // it('los campos de usuario y contraseña deben estar en pantalla', () => {
    // const usernameInput: HTMLElement = getByTestId('userInput')
    // const passwordInput: HTMLElement = getByTestId('passwordInput')
  
    // expect(usernameInput).toBeTruthy()
    // expect(passwordInput).toBeTruthy()
  // })
  
  // it('should update username and password properties', () => {
    // const usernameInput: HTMLElement = getByTestId('userInput')
    // const passwordInput: HTMLElement = getByTestId('passwordInput')
  
    // usernameInput.value = 'sol'
    // passwordInput.value = '1234'
  
    // usernameInput.dispatchEvent(new Event('input'))
    // passwordInput.dispatchEvent(new Event('input'))
  
    // fixture.detectChanges()
  
    // expect(component.loginData.user).toBe('sol')
    // expect(component.loginData.password).toBe('1234')
  // })
  
})
