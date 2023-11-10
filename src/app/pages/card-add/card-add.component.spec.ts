import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'
import {HttpClientModule} from '@angular/common/http'
import {RouterTestingModule} from '@angular/router/testing'
import {VariantFilterComponent} from 'src/app/components/filter/variant-filter/variant-filter.component'
import {CardAddComponent} from './card-add.component'
import {CardSearchComponent} from '../card-search/card-search.component'
import {SearchbarComponent} from 'src/app/components/searchbar/searchbar.component'
import {FormsModule} from '@angular/forms'

describe('Card Add Component', () => {
  let store: CardAddComponent
  let fixture: ComponentFixture<CardAddComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      declarations: [
        CardAddComponent,
        VariantFilterComponent,
        CardSearchComponent,
        SearchbarComponent
      ]
    }).compileComponents()
  }))

  it('should create', () => {
    fixture = TestBed.createComponent(CardAddComponent)
    store = fixture.debugElement.componentInstance
    expect(store).toBeTruthy()
  })
})
