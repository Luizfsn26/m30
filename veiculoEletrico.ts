import Veiculo from './veiculo';

class VeiculoEletrico extends Veiculo {
    private nivelBateria: number;

    constructor(latitude: number, longitude: number, nivelBateria: number) {
        super(latitude, longitude);
        this.nivelBateria = nivelBateria;
    }

    recarregar(novoNivel: number): void {
        this.nivelBateria = novoNivel;
    }

    obterNivelBateria(): number {
        return this.nivelBateria;
    }
}

export default VeiculoEletrico;
