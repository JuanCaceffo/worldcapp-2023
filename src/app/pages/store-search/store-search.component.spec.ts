import {ComponentFixture, TestBed} from '@angular/core/testing'

import {StoreSearchComponent} from './store-search.component'
import {BaseFilterComponent} from 'src/app/components/filter/base-filter.component'
import {CardMarketComponent} from 'src/app/components/card-market/card-market.component'
import {FormsModule} from '@angular/forms'
import {SortedByFilterComponent} from 'src/app/components/filter/sorted-by-filter/sorted-by-filter.component'
import {FullAddressPipe} from 'src/app/pipes/full-address.pipe'
import {HttpClientModule} from '@angular/common/http'

describe('StoreSearchComponent', () => {
  let component: StoreSearchComponent
  let fixture: ComponentFixture<StoreSearchComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StoreSearchComponent,
        BaseFilterComponent,
        SortedByFilterComponent,
        CardMarketComponent,
        FullAddressPipe
      ],
      imports: [FormsModule, HttpClientModule]
    })
    fixture = TestBed.createComponent(StoreSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
