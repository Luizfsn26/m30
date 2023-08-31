import VeiculoEletricoVoador from './veiculoEletricoVoador';

const drone = new VeiculoEletricoVoador(0, 0, 90, 100);

const [latitude, longitude, altitude] = drone.obterCoordenadasEAltitude();
console.log(`Inicial: Latitude ${latitude}, Longitude ${longitude}, Altitude ${altitude}`);

drone.mover(10, 20, 150);

const [novaLatitude, novaLongitude, novaAltitude] = drone.obterCoordenadasEAltitude();
console.log(`Final: Latitude ${novaLatitude}, Longitude ${novaLongitude}, Altitude ${novaAltitude}`);
