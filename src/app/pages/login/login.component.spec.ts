import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LoginComponent } from './login.component'
import { LogoComponent } from 'src/app/components/logo/logo.component'
import { FieldComponent } from 'src/app/components/fields/field.component'
import { IconFieldComponent } from 'src/app/components/fields/icon-field/icon-field.component'
import { InputFieldComponent } from 'src/app/components/fields/input-field/input-field.component'
import { FieldLabelComponent } from 'src/app/components/fields/field-label/field-label.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, LogoComponent, FieldComponent, IconFieldComponent, InputFieldComponent, FieldLabelComponent]
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('los campos de usuario y contraseña deben estar en pantalla', () => {
    const usernameInput = fixture.nativeElement.querySelector('#user')
    const passwordInput = fixture.nativeElement.querySelector('#password')
  
    expect(usernameInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
  })
  
  it('should update username and password properties', () => {
    const usernameInput = fixture.nativeElement.querySelector('#username')
    const passwordInput = fixture.nativeElement.querySelector('#password')
  
    usernameInput.value = 'sol'
    passwordInput.value = '1234'
  
    usernameInput.dispatchEvent(new Event('input'))
    passwordInput.dispatchEvent(new Event('input'))
  
    fixture.detectChanges()
  
    expect(component.loginData.user).toBe('sol')
    expect(component.loginData.password).toBe('1234')
  })
  
})
