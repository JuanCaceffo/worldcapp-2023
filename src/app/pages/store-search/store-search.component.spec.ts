import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreSearchComponent } from './store-search.component'
import { BaseFilterComponent } from 'src/app/components/filter/baseFilter.component'
import { SortedByFilterComponent } from 'src/app/components/filter/sortedByFilter/sortedByFilter.component'
import { CardMarketComponent } from 'src/app/components/card-market/card-market.component'

describe('StoreSearchComponent', () => {
  let component: StoreSearchComponent
  let fixture: ComponentFixture<StoreSearchComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StoreSearchComponent,
        BaseFilterComponent,
        SortedByFilterComponent,
        CardMarketComponent
      ]
    })
    fixture = TestBed.createComponent(StoreSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
