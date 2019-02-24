import { Etapa } from './etapa';
import { Equipo } from './equipo';

export class Campeonato {
  id: number;
  nombre: String;
  cantParticipantes: Number;
  disciplina: String;
  activo: boolean;
  etapas: Etapa[];
  equipos: Equipo[];
  etapaActualId: number;
}
