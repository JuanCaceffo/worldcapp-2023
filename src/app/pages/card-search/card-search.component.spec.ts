import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing'
import {HttpClient} from '@angular/common/http'
import {CardSearchComponent} from './card-search.component'
import {VariantFilterComponent} from 'src/app/components/filter/variant-filter/variant-filter.component'
import {FormsModule} from '@angular/forms'
import {SearchbarComponent} from 'src/app/components/searchbar/searchbar.component'
import {
  httpClientSpy,  
  userStub
} from 'src/app/services/card-service/httpClient-spy'
import {Router} from '@angular/router'
import {CardComponent} from 'src/app/components/cards/card/card.component'
import {ConcatenatePipe} from 'src/app/pipes/concatenate-pipe.pipe'
import {UserService} from 'src/app/services/user-service/user.service'
import {mockCardData} from 'src/app/mocks/card.mock'
import { getByTestId } from 'src/app/helpers/test.helper'

describe('Card Search Component', () => {
  let store: CardSearchComponent
  let fixture: ComponentFixture<CardSearchComponent>
  let routerSpy: jasmine.SpyObj<Router>

  beforeEach(fakeAsync(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate'])

    TestBed.configureTestingModule({
      imports: [        
        FormsModule        
      ],
      declarations: [
        CardSearchComponent,
        SearchbarComponent,
        VariantFilterComponent,
        CardComponent,
        ConcatenatePipe        
      ],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy},
        {provide: Router, useValue: routerSpy}
      ]
    }).compileComponents()
    const userService = TestBed.inject(UserService)
    userService.login(userStub)
    tick()
    fixture = TestBed.createComponent(CardSearchComponent)
    store = fixture.componentInstance
    fixture.detectChanges()
    tick()
  }))

  it('should create', () => {
    expect(store).toBeTruthy()
  })

  it('deben cargarse las figuritas luego de iniciar el componente', () => {
    expect(store.listCards.length).toEqual(mockCardData.length)
  })

  it('card click should navigate', fakeAsync(() => {
    //Arrange
    fixture.detectChanges()
    const card = getByTestId(fixture, 'card-1')    
    //Act    
    card.click()
    const [url, idDuenio, idCard] = routerSpy.navigate.calls.first().args[0]
    // //Assert
    expect(url).toEqual('/detalle-figurita')
    expect(idDuenio).toEqual(store.listCards[0].ownerId)
    expect(idCard).toEqual(1)
  }))
})