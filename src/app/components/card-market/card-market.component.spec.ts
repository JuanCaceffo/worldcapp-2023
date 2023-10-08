/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing'

import { CardMarketComponent } from './card-market.component'
import { CardMarketStub } from 'src/app/services/servicesStubs/card-market-stub'
import { getByTestId } from 'src/app/helpers/test.helper'

describe('CardMarketComponent', () => {
  let component: CardMarketComponent
  let fixture: ComponentFixture<CardMarketComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardMarketComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarketComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Ingresa un punto de venta y se bindea todos sus valores correctamente', () => {
    component.marketCards = [new CardMarketStub()]
    fixture.detectChanges()

    const title = getByTestId(fixture, 'title-market-card')
    const address = getByTestId(fixture, 'address-market-card')
    const geoLocation = getByTestId(fixture, 'geolocation-market-card')
    const distance = getByTestId(fixture, 'distance-market-card')
    const stock = getByTestId(fixture, 'stock-market-card')
    const price = getByTestId(fixture, 'price-market-card')

    expect(title.textContent).toBe('TestStub')
    expect(address.textContent).toBe('Calle falsa 123')
    expect(geoLocation.textContent).toBe('3')
    expect(distance.textContent).toBe('2')
    expect(stock.textContent).toBe('2')
    expect(price.textContent).toBe('1')
  })

  it('Ingresa un punto de venta y verifica el correcto funcionamiento de pedidos pendientes', () => {
    component.marketCards = [new CardMarketStub()]
    fixture.detectChanges()

    const pending = getByTestId(fixture, 'pending-market-card')

    expect(pending.textContent).toBe('Pedidos Pendientes')
    component.marketCards[0].pendingOrders = false
    fixture.detectChanges()

    expect(pending.textContent).toBe('')
  })

  //TODO: Se podría hacer el test de los iconos (dependiendo que tipo de market se recibe)
})
