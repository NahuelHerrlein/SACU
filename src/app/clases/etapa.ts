import { Partido } from './partido';

export class Etapa {
  id: number;
  nombre: String;
  partidos: Partido[];
  etapaSiguiente: Etapa;
}
