import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CardUserComponent} from './card-user.component'

describe('CardUserComponent', () => {
  let component: CardUserComponent
  let fixture: ComponentFixture<CardUserComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUserComponent]
    })
    fixture = TestBed.createComponent(CardUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Debe crearse', () => {
    expect(component).toBeTruthy()
  })
  it("Inicialmente tengo como nombre de usuario el propio del usuario", () => {
    const initialUsername = fixture.debugElement.nativeElement.querySelector('[data-testid="initialUsername"]')
    expect(initialUsername.textContent).toBe('elMuñe')
  })
  it("Inicialmente tengo como edad del usuario el propio del usuario", () => {
    const initialAge = fixture.debugElement.nativeElement.querySelector('[data-testid="initialAge"]')
    expect(initialAge.textContent).toContain('30')
  })
  it("Inicialmente tengo como ubicacion de usuario el propio del usuario", () => {
    const initialLocation = fixture.debugElement.nativeElement.querySelector('[data-testid="initialLocation"]')
    expect(initialLocation.textContent).toContain('Parque Chas')  
  })
  
  
  //it("Cuando hago click en el boton se despliega el input para ingresar el nuevo usuario", () => {
    //const buttonElement = fixture.debugElement.nativeElement.querySelector('[data-testid="edit-button"]')
    //buttonElement.click()
    //fixture.detectChanges()
  //})

})
