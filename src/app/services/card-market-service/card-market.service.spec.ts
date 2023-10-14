/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing'
import {CardMarketService} from './card-market.service'

describe('Service: CardMarket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardMarketService]
    })
  })

  it('should ...', inject([CardMarketService], (service: CardMarketService) => {
    expect(service).toBeTruthy()
  }))
})
