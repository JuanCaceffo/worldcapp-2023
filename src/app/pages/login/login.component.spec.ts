import {LoginComponent} from './login.component'
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {LogoComponent} from 'src/app/components/logo/logo.component'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {getByTestId} from 'src/app/helpers/test.helper'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  //let router: Router

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [LoginComponent, LogoComponent]
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    //router = TestBed.inject(Router)
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('los campos de usuario y contraseña deben estar en pantalla', async () => {
    const usernameInput: HTMLElement = getByTestId(fixture, 'userInput')
    const passwordInput: HTMLElement = getByTestId(fixture, 'passwordInput')

    expect(usernameInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
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
})
