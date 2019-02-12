module.exports = (app) => {
  const partido = require('../Controladores/partido.controller');
  app.get('/api/partido', partido.getLista);
  app.get('/api/partido/:id', partido.getOneById);
  app.post('/api/partido/nuevo', partido.create);
  app.put('/api/partido/:id', partido.update);
  app.delete('/api/partido/borrar/:id', partido.delete);
}