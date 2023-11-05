import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing'
import {HttpClient, HttpClientModule} from '@angular/common/http'
import {RouterTestingModule} from '@angular/router/testing'
import {CardSearchComponent} from './card-search.component'
import {VariantFilterComponent} from 'src/app/components/filter/variant-filter/variant-filter.component'
import {FormsModule} from '@angular/forms'
import {SearchbarComponent} from 'src/app/components/searchbar/searchbar.component'
import {AppRoutingModule, routingComponents} from 'src/app/app-routing.module'
import { httpClientSpy } from 'src/app/services/card-service/httpClient-spy'
import { mockCardData } from 'src/app/mocks/card.mock'

describe('Card Search Component', () => {
  let store: CardSearchComponent
  let fixture: ComponentFixture<CardSearchComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
      ],
      declarations: [
        CardSearchComponent,
        SearchbarComponent,
        VariantFilterComponent,
        routingComponents
      ],
      providers: [
        {provide: HttpClient, useValue: httpClientSpy}
      ]
    }).compileComponents()
    //Arrange
    fixture = TestBed.createComponent(CardSearchComponent)
    store = fixture.componentInstance      
  }))

  it('should create', () => {
    expect(store).toBeTruthy()
  })

  it('deben cargarse las figuritas luego de iniciar el componente', fakeAsync(() => {
    //Act
    store.instanceFigus()
    tick()
    //Assert          
    expect(store.listCards.length).toEqual(mockCardData.length)
  }))
})
