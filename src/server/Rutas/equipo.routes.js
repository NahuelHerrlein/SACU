module.exports = (app) => {
  const equipo = require('../Controladores/equipo.controller');
  app.get('/api/equipos', equipo.getLista);
  app.get('/api/equipos/campeonato/:idCampeonato', equipo.getEquiposCampeonato);
  app.get('/api/equipos/:id', equipo.getOneById);
  app.post('/api/equipos/nuevo', equipo.create);
  app.put('/api/equipos/:id', equipo.update);
  app.put('/api/equipos/borrar/:id', equipo.delete);
  app.put('/api/equipos/perdedor/:id', equipo.perdedor);
  app.put('/api/equipos/:idEquipo/partido/:idPartido', equipo.fijarPartido);

}