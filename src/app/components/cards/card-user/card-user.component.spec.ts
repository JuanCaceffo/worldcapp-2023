import {ComponentFixture, TestBed} from '@angular/core/testing'
import {FormsModule} from '@angular/forms'
import {CardUserComponent} from './card-user.component'
import {ConcatenatePipe} from 'src/app/pipes/concatenate-pipe.pipe'
import {CardComponent} from '../card/card.component'
import {HttpClientModule} from '@angular/common/http'

describe('CardUserComponent', () => {
  let component: CardUserComponent
  let fixture: ComponentFixture<CardUserComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUserComponent, CardComponent, ConcatenatePipe],
      imports: [FormsModule, HttpClientModule]
    })
    fixture = TestBed.createComponent(CardUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Debe crearse', () => {
    expect(component).toBeTruthy()
  })
  it('Inicialmente tengo como nombre de usuario el propio del usuario', () => {
    const initialUsername = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="initialUsername"]'
    )
    expect(initialUsername.textContent).toBe('Facundinho')
  })
  it('Inicialmente tengo como edad del usuario el propio del usuario', () => {
    const initialAge = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="initialAge"]'
    )
    expect(initialAge.textContent).toContain('26')
  })
  it('Inicialmente tengo como ubicacion de usuario el propio del usuario', () => {
    const initialLocation = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="initialLocation"]'
    )
    expect(initialLocation.textContent).toContain('3 de Febrero')
  })
  it('Incialmente el input no se encuentra desplegado', () => {
    const inputElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="edit-input"]'
    )
    expect(inputElement).toBeNull()
  })
  it('Cuando se clickea en el boton se despliega el input para ingresar el nuevo usuario', () => {
    const buttonElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="edit-button"]'
    )

    buttonElement.click()
    fixture.detectChanges()

    const updatedInputElement =
      fixture.debugElement.nativeElement.querySelector(
        '[data-testid="edit-input"]'
      )
    expect(updatedInputElement).not.toBeNull()
  })
  it('Cuando el campo del nuevo usuario se escribe un nombre de usuario nuevo, valido el boton esta habilitado', () => {
    const buttonEditElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="edit-button"]'
    )

    buttonEditElement.click()
    component.editedUsername = 'Usuario'
    fixture.detectChanges()

    const buttonSaveElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="save-button"]'
    )
    expect(buttonSaveElement.disabled).toBe(false)
  })

  it('Cuando el campo del nuevo usuario esta vacio el boton que realiza el save se encuentra desahibilitado', () => {
    const buttonEditElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="edit-button"]'
    )

    buttonEditElement.click()
    fixture.detectChanges()

    const buttonSaveElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="save-button"]'
    )
    expect(buttonSaveElement.disabled).toBe(true)
  })

  it('Cuando el campo supera el maximo de caracteres el boton que realiza el save se encuentra deshabilitado', () => {
    const buttonEditElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="edit-button"]'
    )

    buttonEditElement.click()
    component.editedUsername = 'UsuarioConMasDeVeinteCarac'
    fixture.detectChanges()

    const buttonSaveElement = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="save-button"]'
    )
    expect(buttonSaveElement.disabled).toBe(true)
  })
})
