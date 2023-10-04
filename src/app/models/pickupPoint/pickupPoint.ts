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
