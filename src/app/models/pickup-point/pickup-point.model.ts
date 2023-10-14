import {PickupPointDTO} from 'src/app/dtos/pickup-point.dto'

export class PickupPoint {
  constructor(public props: PickupPointDTO) {}

  static fromJson(cardJSON: PickupPointDTO): PickupPoint {
    return new PickupPoint(cardJSON)
  }
}

//Puntos de Ventas
//Cuando se traiga un pickuppoint va a ser new PickupPoint con sus respectivos atributos

//Service pickupPoint
//Encargado de obtener el pickuppoint (por ahora hacer un stub que tambien va a servir para los test)

//Componente pickupPoint
//Encargado de mostrar la data de pickuppoint y de hacer los cambios necesarios para volcar la data bien
