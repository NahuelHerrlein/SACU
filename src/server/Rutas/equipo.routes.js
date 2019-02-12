module.exports = (app) => {
  const equipo = require('../Controladores/equipo.controller');
  app.get('/api/equipos', equipo.getLista);
  app.get('/api/equipos/:id', equipo.getOneById);
  app.post('/api/equipos/nuevo', equipo.create);
  app.put('/api/equipos/:id', equipo.update);
  app.delete('/api/equipos/borrar/:id', equipo.delete);
}