module.exports = (sequelize, Sequelize) => {
  const Etapa = sequelize.define("etapa", {
    nombre: {type: Sequelize.STRING},
    etapaSiguiente: {type: Sequelize.STRING},
    campeonatoId: {type: Sequelize.INTEGER}
  }, {
    underscored: true
  });
  return Etapa;
}