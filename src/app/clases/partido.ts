import { Equipo } from './equipo';

export class Partido {
  id: number;
  fecha: Date;
  lugar: string;
  equipos: Equipo[];
  puntos: number[];
  orden: number;
  estado: string;
  //Es el número del partido dentro de la etapa
  nroPartido: number;
  etapaId: number;
}
 
