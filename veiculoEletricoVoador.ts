import VeiculoEletrico from './veiculoEletrico';

class VeiculoEletricoVoador extends VeiculoEletrico {
    private altitude: number;

    constructor(latitude: number, longitude: number, nivelBateria: number, altitude: number) {
        super(latitude, longitude, nivelBateria);
        this.altitude = altitude;
    }

    mover(latitude: number, longitude: number, altitude: number): void {
        super.mover(latitude, longitude);
        this.altitude = altitude;
    }

    obterCoordenadasEAltitude(): [number, number, number] {
        return [this.latitude, this.longitude, this.altitude];
    }
}

export default VeiculoEletricoVoador;
