import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { LogoComponent } from '../logo/logo.component'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, LogoComponent]
    })
    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
  const getByTestId = (testId: string) => {
    return fixture.debugElement.nativeElement.querySelector(
      `[data-testid="${testId}"]`
    ) as HTMLElement
  }

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('when the mobile menu is drop down the open menu button is deleted of the dom', () => {
    //arrange
    const openButtonMobile: HTMLElement = getByTestId('button-mobile-open')
    //active
    openButtonMobile.click()
    expect(getByTestId('button-mobile-open')).toBeTruthy()
    fixture.detectChanges()
    //assert
    expect(getByTestId('button-mobile-open')).toBeNull()
  })
  it('when you open the mobile menu the navbar get extra class', () => {
    const navbarClass = getByTestId('navbar')
    const openButtonMobile: HTMLElement = getByTestId('button-mobile-open')

    openButtonMobile.click()
    fixture.detectChanges()

    expect(navbarClass).toHaveClass('header-main__menu-active')
  })
})
