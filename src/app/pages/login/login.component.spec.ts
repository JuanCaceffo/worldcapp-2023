import { LoginComponent } from './login.component'
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { FieldLabelComponent } from 'src/app/components/fields/field-label/field-label.component'
import { InputFieldComponent } from 'src/app/components/fields/input-field/input-field.component'
import { IconFieldComponent } from 'src/app/components/fields/icon-field/icon-field.component'
import { LogoComponent } from 'src/app/components/logo/logo.component'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  let router: Router

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [LoginComponent, IconFieldComponent ,InputFieldComponent, FieldLabelComponent, LogoComponent]
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    router = TestBed.inject(Router)
    fixture.detectChanges()
  }))

  const getByTestId = (testId: string): HTMLInputElement => {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('los campos de usuario y contraseña deben estar en pantalla', async () => {
    const usernameInput: HTMLElement = getByTestId('userInput')
    const passwordInput: HTMLElement = getByTestId('passwordInput')
    
    expect(usernameInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
  })
  
  it('con usuario y contraseña correctos se debe dar como valido el login', async () => {
    const loginButton = getByTestId('loginButton')
    
    component.loginData.user = "sol"
    component.loginData.password = "1234"

    loginButton.click()
    fixture.detectChanges()

    expect(component.loginData.validLogin).toBeTrue()
  })

})

