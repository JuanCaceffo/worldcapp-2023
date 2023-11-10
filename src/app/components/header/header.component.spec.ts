import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { LogoComponent } from '../logo/logo.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HeaderNavComponent } from './header-nav/header-nav.component'
import { getByTestId } from 'src/app/helpers/test.helper'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent, HeaderNavComponent, LogoComponent]
    })
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('when the mobile menu is drop down the open menu button is deleted of the dom', () => {
    //arrange
    const openButtonMobile: HTMLElement = getByTestId(
      fixture,
      'button-mobile-open'
    )
    //active
    openButtonMobile.click()
    expect(getByTestId(fixture, 'button-mobile-open')).toBeTruthy()
    fixture.detectChanges()
    //assert
    expect(getByTestId(fixture, 'button-mobile-open')).toBeNull()
  })
  it('when you open the mobile menu the navbar get extra class', () => {
    const navbarClass = getByTestId(fixture, 'navbar')
    const openButtonMobile: HTMLElement = getByTestId(
      fixture,
      'button-mobile-open'
    )

    openButtonMobile.click()
    fixture.detectChanges()

    expect(navbarClass).toHaveClass('header-main__menu-active')
  })
})
