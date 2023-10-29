/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, fakeAsync} from '@angular/core/testing'

import {CardMarketComponent} from './card-market.component'
import {mockedCardMarket} from 'src/app/mocks/card-market.mock'
import {getByTestId} from 'src/app/helpers/test.helper'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'
import {FullAddressPipe} from 'src/app/pipes/full-address.pipe'
import {HttpClientModule} from '@angular/common/http'

describe('CardMarketComponent', () => {
  let component: CardMarketComponent
  let fixture: ComponentFixture<CardMarketComponent>

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CardMarketComponent, FullAddressPipe],
      imports: [HttpClientModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMarketComponent)
    component = fixture.componentInstance
    component.inputMarketCard = new PickupPoint(mockedCardMarket[0])
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
    expect(address.textContent).toBe('Calle Falsa 11')
    expect(geoLocation.textContent).toBe('x: 2.1234, y: 54.1234')
    expect(distance.textContent).toBe('2.00 Km')
    expect(stock.textContent).toBe('2')
    expect(price.textContent).toBe('€1')
  })

  it('Ingresa un punto de venta y verifica el correcto funcionamiento de pedidos pendientes', async () => {
    const pending = getByTestId(fixture, 'pending-market-card')

    expect(pending.textContent).toBe('Pedidos Pendientes')
    component.marketCard.props.pendientes = false
    fixture.detectChanges()

    expect(pending.textContent).toBe('')
  })

  it('Ingresa un punto de venta de un respectivo tipo y se visualiza el icono correctamente', () => {
    const icon = getByTestId(fixture, 'kiosko-market-card')

    expect(icon).toBeTruthy()
  })
})
