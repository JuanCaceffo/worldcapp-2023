import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {LoginComponent} from './login.component'
import {LogoComponent} from 'src/app/components/logo/logo.component'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Router} from '@angular/router'
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {getByTestId} from 'src/app/helpers/test.helper'
import {UserService} from 'src/app/services/user-service/user.service'
import {httpClientSpy} from './../../services/httpClient-spy/httpClientSpy'

describe('Login Component', () => {
  let login: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(fakeAsync(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate'])

    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [LoginComponent, LogoComponent],
      providers: [
        {provide: Router, useValue: routerSpy}, // Espía del Router
        {provide: HttpClient, useValue: httpClientSpy} // Espía del HttpClient
      ]
    }).compileComponents()
    fixture = TestBed.createComponent(LoginComponent)
    login = fixture.componentInstance

    fixture.detectChanges()
  }))

  it('should create', () => {
    fixture = TestBed.createComponent(LoginComponent)
    login = fixture.debugElement.componentInstance
    expect(login).toBeTruthy()
  })

  it('debería navegar a "/figuritas" cuando el usuario y la contraseña son correctos', async () => {
    const usuarioCorrecto = 'alejo'
    const contraseñaCorrecta = '123456'

    const userService = TestBed.inject(UserService)
    spyOn(userService, 'login').and.returnValue(Promise.resolve())

    const loginForm: FormGroup = login.loginForm
    loginForm.get('name')?.setValue(usuarioCorrecto)
    loginForm.get('password')?.setValue(contraseñaCorrecta)

    await login.submitLogin()

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/figuritas'])
  })

  it('Deberia retornar un id cuando el usuario y la contraseña ingresados son correctos', async () => {
    const usuarioCorrecto = 'alejo'
    const contraseñaCorrecta = '123456'
    login.loginForm.setValue({
      name: usuarioCorrecto,
      password: contraseñaCorrecta
    })

    getByTestId(fixture, 'loginButton').click()
    fixture.detectChanges()

    const {userLogedID} = httpClientSpy.post.calls.mostRecent().returnValue
    expect(userLogedID).toBe('123')
  })
})

// it('los campos de usuario y contraseña deben estar en pantalla', fakeAsync(() => {
//   const usernameInput: HTMLElement = getByTestId(fixture, 'userInput')
//   const passwordInput: HTMLElement = getByTestId(fixture, 'passwordInput')

//   expect(usernameInput).toBeTruthy()
//   expect(passwordInput).toBeTruthy()
// }))

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
