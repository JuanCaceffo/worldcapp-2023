import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {FooterComponent} from './footer.component'
import {LogoComponent} from '../logo/logo.component'

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
    const buttonElements = fixture.nativeElement.querySelectorAll('button')
    spyOn(component, 'gotoURL')

    buttonElements[0].click()
    fixture.detectChanges()

    expect(component.gotoURL).toHaveBeenCalledWith('https://www.facebook.com')
  }))
})
