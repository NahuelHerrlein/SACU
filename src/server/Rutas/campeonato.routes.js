module.exports = (app) => {
  const campeonato = require('../Controladores/campeonato.controller');
  app.get('/api/campeonatos', campeonato.getLista);
  app.get('/api/campeonatos/activos', campeonato.getActivos);
  app.post('/api/campeonatos/nuevo', campeonato.create);
  app.get('/api/campeonatos/:id', campeonato.getOneById);
  app.put('/api/campeonatos/:id', campeonato.update);
  app.put('/api/campeonatos/borrar/:id', campeonato.delete);
  app.put('/api/campeonatos/finalizar/:id', campeonato.finalizar);
  app.post('/api/campeonatos/comenzar', campeonato.comenzar);
  app.post('/api/campeonatos/:idCampeonato/avanzarEtapa/:idEtapa', campeonato.avanzar);
}