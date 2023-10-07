import { IPickupPoint } from 'src/app/interfaces/pickupPoint'

export class PickupPoint implements IPickupPoint {
  static valorsobre = (): number => 170.0
  constructor(
    public name: string,
    public address: string,
    public envelopeStock: number,
    public envelopePrice: number,
    public geoLocation: number
  ) {}

  //TODO: Generar los respectivos metodos
  distance: number = 2
  pendingOrders: boolean = true
}

//Puntos de Ventas
//Cuando se traiga un pickuppoint va a ser new PickupPoint con sus respectivos atributos

//Service pickupPoint
//Encargado de obtener el pickuppoint (por ahora hacer un stub que tambien va a servir para los test)

//Componente pickupPoint
//Encargado de mostrar la data de pickuppoint y de hacer los cambios necesarios para volcar la data bien
