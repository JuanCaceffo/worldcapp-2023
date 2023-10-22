import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {LoginComponent} from './login.component'
import {LogoComponent} from 'src/app/components/logo/logo.component'
import {HttpClientModule} from '@angular/common/http'
import { getByTestId } from 'src/app/helpers/test.helper'

describe('Login Component', () => {
  let login: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [LoginComponent, LogoComponent]
    }).compileComponents()
  }))

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent)
    login = fixture.debugElement.componentInstance    
    expect(login).toBeTruthy()    
  })

  it('los campos de usuario y contraseña deben estar en pantalla', fakeAsync(() => {
    const usernameInput: HTMLElement = getByTestId(fixture, 'userInput')
    const passwordInput: HTMLElement = getByTestId(fixture, 'passwordInput')  
        
    expect(usernameInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
  }))
})

//TODO: mockear servicio
/* it('con usuario y contraseña correctos se debe dar como valido el login', async () => {
    const loginButton = getByTestId('loginButton')

    component.data.userName = 'sol'
    component.data.password = '123456'

    loginButton.click()
    fixture.detectChanges()

    expect(getByTestId('errorMessage')).toBeTrue()
  }) */
// })
