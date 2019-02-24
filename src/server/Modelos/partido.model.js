module.exports = (sequelize, Sequelize) => {
  const Partido = sequelize.define("partido", {
    fecha: {type: Sequelize.DATE},
    lugar: {type: Sequelize.STRING},
    puntos: {type: Sequelize.ARRAY(Sequelize.INTEGER)},
    orden: {type: Sequelize.STRING},
    estado: {
      type: Sequelize.STRING,
      values: ['Pendiente', 'En juego', 'Terminado', 'Suspendido'],
      defaultValue: 'Pendiente'
    },
    nroPartido: {type: Sequelize.INTEGER}
  });
  return Partido
}
