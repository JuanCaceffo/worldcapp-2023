/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing'
import {CardMarketService} from './card-market.service'
import {HttpClientModule} from '@angular/common/http'

describe('Service: CardMarket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardMarketService],
      imports: [HttpClientModule]
    })
  })

  it('should ...', inject([CardMarketService], (service: CardMarketService) => {
    expect(service).toBeTruthy()
  }))
})
