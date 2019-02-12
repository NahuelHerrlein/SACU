module.exports = (sequelize, Sequelize) => {
  const Etapa = sequelize.define("etapa", {
    nombre: {type: Sequelize.STRING},
    etapaSiguiente: {type: Sequelize.STRING}
  }, {
    underscored: true
  });
  return Etapa;
}