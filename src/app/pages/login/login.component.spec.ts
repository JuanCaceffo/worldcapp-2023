import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LogoComponent } from 'src/app/components/logo/logo.component'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, LogoComponent]
    })
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Debería mostrar los campos de usuario y contraseña', () => {
    const usuarioInput = fixture.nativeElement.querySelector('input[data-testid="user-input"]')
    const contraseñaInput = fixture.nativeElement.querySelector('input[data-testid="password-input"]')

    expect(usuarioInput).toBeTruthy()
    expect(contraseñaInput).toBeTruthy()
  })

  it('Debería mostrar el botón de ingreso', () => {
    const botonIngreso = fixture.nativeElement.querySelector('button[data-testid="login-button"]')
    expect(botonIngreso).toBeTruthy()
  })
})
