/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing'
import {ProvinceService} from './province.service'
import {HttpClientModule} from '@angular/common/http'

describe('Service: Province', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvinceService],
      imports: [HttpClientModule]
    })
  })

  it('should ...', inject([ProvinceService], (service: ProvinceService) => {
    expect(service).toBeTruthy()
  }))
})
