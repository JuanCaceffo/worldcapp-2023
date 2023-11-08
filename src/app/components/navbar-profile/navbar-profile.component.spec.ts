/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {NavbarProfileComponent} from './navbar-profile.component'
import {RouterTestingModule} from '@angular/router/testing'
import {Location} from '@angular/common'
import {By} from '@angular/platform-browser'
import {AppRoutingModule} from 'src/app/app-routing.module'

describe('NavbarProfileComponent', async () => {
  let component: NavbarProfileComponent
  let fixture: ComponentFixture<NavbarProfileComponent>
  let location: Location

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppRoutingModule],
      declarations: [NavbarProfileComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    location = TestBed.inject(Location)
    fixture = TestBed.createComponent(NavbarProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('debería mostrar listProps correctamente', () => {
    const tabItems = fixture.debugElement.queryAll(
      By.css('[data-testid="tab-button"]')
    )
    expect(tabItems.length).toBe(3)
  })
  it('cuando hago click en el tab, me deberia mandar a la ruta correspondiente', async () => {
    const tabItems = fixture.debugElement.queryAll(
      By.css('[data-testid="tab-button"]')
    )
    tabItems[0].nativeElement.click()
    await fixture.whenStable()

    expect(location.path()).toBe('/perfil/perfil-usuario')
  })
})
