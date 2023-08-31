class Veiculo {
  protected latitude: number;
  protected longitude: number;

  constructor(latitude: number, longitude: number) {
      this.latitude = latitude;
      this.longitude = longitude;
  }

  mover(latitude: number, longitude: number): void {
      this.latitude = latitude;
      this.longitude = longitude;
  }

  obterCoordenadas(): [number, number] {
      return [this.latitude, this.longitude];
  }
}

export default Veiculo;
