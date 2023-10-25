import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'
import {LoginComponent} from './login.component'
import {LogoComponent} from 'src/app/components/logo/logo.component'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {Router} from '@angular/router'
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms'
import {throwError} from 'rxjs'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {UserService} from 'src/app/services/user-service/user.service'

describe('Login Component', () => {
  let login: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  let routerSpy: jasmine.SpyObj<Router>
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(fakeAsync(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate'])
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])

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
    const usuarioCorrecto = 'sol'
    const contraseñaCorrecta = '123456'

    const userService = TestBed.inject(UserService)
    spyOn(userService, 'login').and.returnValue(Promise.resolve())

    const loginForm: FormGroup = login.loginForm
    loginForm.get('name')?.setValue(usuarioCorrecto)
    loginForm.get('password')?.setValue(contraseñaCorrecta)

    await login.submitLogin()

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/figuritas'])
  })

  it('debería manejar errores cuando el inicio de sesión falla', async () => {
    httpClientSpy.get.and.returnValue(throwError('mensaje de error'))

    login.loginForm.setValue({name: 'usuario', password: 'contraseña'})
    await login.submitLogin()

    expect(login.errorMsg).toBe(
      'Usuario o contraseña ingresados son inválidos! Vuelva a intentarlo'
    )
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
