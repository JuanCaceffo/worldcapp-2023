import {MarketDTO} from 'src/app/dtos/market.dto'

export class Market {
  constructor(public props: MarketDTO) {}

  static fromJson(cardJSON: MarketDTO): Market {
    return new Market(cardJSON)
  }
}
