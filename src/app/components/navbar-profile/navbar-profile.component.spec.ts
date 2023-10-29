/* tslint:disable:no-unused-variable */
/*
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {NavbarProfileComponent} from './navbar-profile.component'
import {RouterTestingModule} from '@angular/router/testing'
import {Router} from '@angular/router'
import {By} from '@angular/platform-browser'

describe('NavbarProfileComponent', () => {
  let component: NavbarProfileComponent
  let fixture: ComponentFixture<NavbarProfileComponent>
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(fakeAsync(() => {
    routerSpy = jasmine.createSpyObj('Router', ['url'])

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavbarProfileComponent],
      providers: [
        {provide: Router, useValue: routerSpy} // Espía del Router
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('debería mostrar listProps correctamente', () => {
    const userProfilePaths = {
      info: 'perfil-usuario',
      duplicateFigus: 'figuritas-repetidas',
      missingFigus: 'figuritas-faltantes'
    }
    component.listProps = [
      {
        content: 'Información General',
        url: `/perfil/${userProfilePaths.info}`
      },
      {
        content: 'Figuritas Repetidas',
        url: `/perfil/${userProfilePaths.duplicateFigus}`
      },
      {
        content: 'Figuritas Faltantes',
        url: `/perfil/${userProfilePaths.missingFigus}`
      }
    ]

    fixture.detectChanges()

    const tabItems = fixture.debugElement.queryAll(
      By.css('[data-testid="tab-button"]')
    )
    expect(tabItems.length).toBe(3)
  })
})
*/
