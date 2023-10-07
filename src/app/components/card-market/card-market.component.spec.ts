/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CardMarketComponent } from './card-market.component'
import { CardMarketStub } from 'src/app/services/servicesStubs/card-market-stub'

describe('CardMarketComponent', () => {
  let component: CardMarketComponent
  let fixture: ComponentFixture<CardMarketComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardMarketComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarketComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Ingresa un punto de venta y se bindea sus valores correctamente', () => {
    component.marketCards = [new CardMarketStub()]
    expect(component).toBeTruthy()
  })
})
