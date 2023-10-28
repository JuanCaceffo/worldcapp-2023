/* tslint:disable:no-unused-variable */
import {fakeAsync, TestBed} from '@angular/core/testing'
import {CardWithOwnerComponent} from './card-with-owner.component'
import {RouterTestingModule} from '@angular/router/testing'
import {CardComponent} from '../card/card.component'
import {ConcatenatePipe} from 'src/app/pipes/concatenate-pipe.pipe'
import {HttpClientModule} from '@angular/common/http'

describe('Cards With Owner Component Tests', () => {
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CardWithOwnerComponent, CardComponent, ConcatenatePipe]
    }).compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(CardWithOwnerComponent)
    const cardOwnered = fixture.debugElement.componentInstance
    expect(cardOwnered).toBeTruthy()
  })
})
