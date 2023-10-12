/* import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flushMicrotasks,
  tick
} from '@angular/core/testing'

import {CardDetailsComponent} from './card-details.component'
import {ActivatedRoute, Router, RouterModule} from '@angular/router'
import {routes, routingComponents} from 'src/app/app-routing.module'
import {APP_BASE_HREF} from '@angular/common'
import {ConcatenatePipe} from 'src/app/pipes/concatenate-pipe.pipe'
import {FormsModule} from '@angular/forms'

let routerSpy: jasmine.SpyObj<Router>

describe('CardDetailsComponent', () => {
  let component: CardDetailsComponent
  let fixture: ComponentFixture<CardDetailsComponent>

  const getByTestId = (testId: string): HTMLInputElement => {
    const compiled = fixture.debugElement.nativeElement
    return compiled.querySelector(`[data-testid="${testId}"]`)
  }

  beforeEach(fakeAsync(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate'])

    TestBed.configureTestingModule({
      declarations: [CardDetailsComponent, routingComponents, ConcatenatePipe],
      imports: [FormsModule, RouterModule.forRoot(routes)],
      providers: [
         {provide: APP_BASE_HREF, useValue: '/'},
        {
          provide: ActivatedRoute,
          useValue: {}
        },
        {provide: Router, useValue: routerSpy}
      ]
    })
    fixture = TestBed.createComponent(CardDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('cuando se clickea en el boton de ir hacia atras vuelve a la pagina principal', fakeAsync(() => {
    const backButton = getByTestId('backButton')
    backButton.click()
    fixture.detectChanges()
    tick()
    const [route] = routerSpy.navigate.calls.first().args[0]
    expect(route).toBe('/figuritas')
  }))
})
 */
