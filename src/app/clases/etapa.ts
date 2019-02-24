import { Partido } from './partido';

export class Etapa {
  id: number;
  nombre: string;
  partidos: Partido[];
  etapaSiguiente: number;
  campeonatoId: number;
}
