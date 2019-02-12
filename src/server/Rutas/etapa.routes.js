module.exports = (app) => {
  const etapa = require('../Controladores/etapa.controller');
  app.get('/api/etapa', etapa.getLista);
  app.get('/api/etapa/:id', etapa.getOneById);
  app.post('/api/etapa/nuevo', etapa.create);
  app.put('/api/etapa/:id', etapa.update);
  app.delete('/api/etapa/borrar/:id', etapa.delete);
}