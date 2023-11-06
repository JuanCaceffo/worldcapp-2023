import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {FooterComponent} from './footer.component'
import {LogoComponent} from '../logo/logo.component'
import { getByTestId } from 'src/app/helpers/test.helper'

describe('FooterComponent', () => {
  let component: FooterComponent
  let fixture: ComponentFixture<FooterComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent, LogoComponent]
    })
    fixture = TestBed.createComponent(FooterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('debería navegar a la URL correcta cuando se hace clic en un botón', fakeAsync(() => {
    const buttonElements = getByTestId(fixture, 'facebook')
    spyOn(component, 'gotoURL')

    buttonElements.click()
    fixture.detectChanges()

    expect(component.gotoURL).toHaveBeenCalledWith('https://www.facebook.com')
  }))

  it('debería navegar a la URL correcta cuando se hace clic en un botón', fakeAsync(() => {
    const buttonElements = getByTestId(fixture, 'instagram')
    spyOn(component, 'gotoURL')

    buttonElements.click()
    fixture.detectChanges()

    expect(component.gotoURL).toHaveBeenCalledWith('https://www.instagram.com')
  }))
})
