import { HttpParams } from "@angular/common/http"
import { CardSearchProps, OrderBy, StoreSearchProps } from "src/app/interfaces/searchCriteria"
class Search {
  palabraClave = ''

  httpParams(): HttpParams{
    let httpParams = new HttpParams()
    Object.entries(this).forEach( ([key, value]) => {            
      httpParams = httpParams.set(key, value.toString())
      console.log(value)            
    })    
    return httpParams
  }

  resetFilter() {
    this.palabraClave = ""
  }
}

export class StoreSearch extends Search implements StoreSearchProps {
  opcionElegida = OrderBy.menorDistancia

  override resetFilter() {
    super.resetFilter()
    this.opcionElegida = OrderBy.menorDistancia
  }
}

export class CardSearch extends Search implements CardSearchProps {
  onFire = false
  esPromesa = false
  cotizacionInicial = 0
  cotizacionFinal = 0

  override resetFilter() {
    super.resetFilter()
    this.onFire = false
    this.esPromesa = false
    this.cotizacionInicial = 0
    this.cotizacionFinal = 0
  }
  
  fromToVerificaition() { return this.cotizacionFinal < this.cotizacionInicial }
      
  checkMin(){
    if (this.fromToVerificaition()) {
      this.cotizacionFinal = this.cotizacionInicial
    }    
  }
}


export const marketFilter = new StoreSearch()
export const cardFilter = new CardSearch()
