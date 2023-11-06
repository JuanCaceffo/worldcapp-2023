import {TestBed, inject} from '@angular/core/testing'
import { CardService } from './card.service'
import {HttpClientModule} from '@angular/common/http'

describe('Service: Card', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CardService]
    })
  })

  it('should ...', inject([CardService], (service: CardService) => {
    expect(service).toBeTruthy()
  }))
})