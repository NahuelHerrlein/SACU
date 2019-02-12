import { Equipo } from './equipo';

export class Partido {
  id: number;
  fecha: Date;
  lugar: String;
  contrincantes: Equipo[];
  puntos: number[];
  orden: String;
  estado: String;
}
