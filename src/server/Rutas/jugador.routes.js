module.exports = (app) => {
  const jugador = require('../Controladores/jugador.controller');
  app.get('/api/jugador', jugador.getLista);
  app.get('/api/jugador/:id', jugador.getOneById);
  app.post('/api/jugador/nuevo', jugador.create);
  app.put('/api/jugador/:id', jugador.update);
  app.delete('/api/jugador/borrar/:id', jugador.delete);
}