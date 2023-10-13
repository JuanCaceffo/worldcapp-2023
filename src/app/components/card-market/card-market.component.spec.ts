/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {CardMarketComponent} from './card-market.component'
import {MockedCardMarket} from 'src/app/services/mocks/card-market.mock'
import {getByTestId} from 'src/app/helpers/test.helper'
import {PickupPoint} from 'src/app/models/pickupPoint/pickupPoint'

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
    component.inputMarketCard = new PickupPoint(MockedCardMarket[0])
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Ingresa un punto de venta y se bindea todos sus valores correctamente', () => {
    const title = getByTestId(fixture, 'title-market-card')
    const address = getByTestId(fixture, 'address-market-card')
    const geoLocation = getByTestId(fixture, 'geolocation-market-card')
    const distance = getByTestId(fixture, 'distance-market-card')
    const stock = getByTestId(fixture, 'stock-market-card')
    const price = getByTestId(fixture, 'price-market-card')

    expect(title.textContent).toBe('Test Mock 1')
    expect(address.textContent).toBe('Calle falsa 123')
    expect(geoLocation.textContent).toBe('3')
    expect(distance.textContent).toBe('2')
    expect(stock.textContent).toBe('2')
    expect(price.textContent).toBe('1')
  })

  it('Ingresa un punto de venta y verifica el correcto funcionamiento de pedidos pendientes', () => {
    const pending = getByTestId(fixture, 'pending-market-card')

    expect(pending.textContent).toBe('Pedidos Pendientes')
    component.marketCard.props.pendingOrders = false
    fixture.detectChanges()

    expect(pending.textContent).toBe('')
  })

  // //TODO: Se podría hacer el test de los iconos (dependiendo que tipo de market se recibe)
  it('Ingresa un punto de venta de un respectivo tipo y se visualiza el icono correctamente', () => {
    const icon = getByTestId(fixture, 'super-market-card')

    expect(icon).toBeTruthy()
  })
})
