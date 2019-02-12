module.exports = (app) => {
  const campeonato = require('../Controladores/campeonato.controller');
  app.get('/api/campeonatos', campeonato.getLista);
  app.get('/api/campeonatos/activos', campeonato.getActivos);
  app.post('/api/campeonatos/nuevo', campeonato.create);
  app.get('/api/campeonatos/:id', campeonato.getOneById);
  app.put('/api/campeonatos/:id', campeonato.update);
  app.delete('/api/campeonatos/borrar/:id', campeonato.delete);
}