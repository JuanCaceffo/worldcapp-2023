import { Injectable } from "@angular/core"
import { CardSearchProps, OrderBy, StoreSearchProps } from "src/app/interfaces/searchCriteria"
class Search {
  palabraClave = ''

  createRequestURL(): string {
    let url =
      `?` +
      Object.keys(this).forEach((key, value) => {
        ;`${key}=${value}&`
      })
    url = url.substring(0,-1)
    return url
  }
}

@Injectable({
  providedIn: 'root'
})
export class StoreSearch extends Search implements StoreSearchProps {
  opcionElegida = OrderBy.menorDistancia
}

@Injectable({
  providedIn: 'root'
})
export class CardSearch extends Search implements CardSearchProps {
  onFire = false
  esPromesa = false
  cotizacionInicial = 0
  cotizacionFinal = 0
  
  fromToVerificaition() { return this.cotizacionFinal < this.cotizacionInicial }
      
  checkMin(){
    if (this.fromToVerificaition()) {
      this.cotizacionFinal = this.cotizacionInicial
    }    
  }
}
