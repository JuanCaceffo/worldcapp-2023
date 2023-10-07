export class PickupPoint {
  static valorsobre = (): number => 170.0
  constructor(
    // private distance: number
    public name: string,
    public address: string,
    public envelopeStock: number,
    public envelopePrice: number,
    public geoLocation: number
  ) {}
}

//Puntos de Ventas
//Cuando se traiga un pickuppoint va a ser new PickupPoint con sus respectivos atributos

//Service pickupPoint
//Encargado de obtener el pickuppoint (por ahora hacer un stub que tambien va a servir para los test)

//Componente pickupPoint
//Encargado de mostrar la data de pickuppoint y de hacer los cambios necesarios para volcar la data bien
