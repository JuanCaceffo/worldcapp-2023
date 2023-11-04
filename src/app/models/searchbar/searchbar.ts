import { HttpParams } from "@angular/common/http"
import { CardSearchProps, OrderBy, StoreSearchProps } from "src/app/interfaces/searchCriteria"

class Search {
  palabraClave = ''

  httpParams(): HttpParams{
    let httpParams = new HttpParams()
    Object.entries(this).forEach( ([key, value]) => {            
      httpParams = httpParams.set(key, value.toString())
      
    })    
    return httpParams
  }
}

export class StoreSearch extends Search implements StoreSearchProps {
  opcionElegida = OrderBy.menorDistancia

}

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