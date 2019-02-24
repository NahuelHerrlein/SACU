module.exports = (sequelize, Sequelize) => {
  const Equipo = sequelize.define('equipo',{
    cantJugadores: {type: Sequelize.INTEGER},
    nombre: {type: Sequelize.STRING},
    pais: {type: Sequelize.STRING},
    club: {type: Sequelize.STRING},
    responsable: {type: Sequelize.STRING},
    activo: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  }, {
    underscored: true
  });
  return Equipo;
}