import { Jugador } from './jugador';

export class Equipo {
  id: number;
  cantJugadores: number;
  nombre: string;
  pais: string;
  club: string;
  jugadores: Jugador[];
  responsable: Jugador;
  campeonatoId: number;
  activo: boolean;
  partidoId: number;
}
