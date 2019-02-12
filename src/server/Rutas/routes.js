module.exports = (app) => {
  require('./equipo.routes')(app);
  require('./partido.routes')(app);
  require('./jugador.routes')(app);
  require('./etapa.routes')(app);
  require('./campeonato.routes')(app);
}