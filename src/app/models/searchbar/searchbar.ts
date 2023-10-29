import { HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
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
