module.exports = (sequelize, Sequelize) => {
  const Equipo = sequelize.define('equipo',{
    cantJugadores: {type: Sequelize.INTEGER},
    nombre: {type: Sequelize.STRING},
    campeonato_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    pais: {type: Sequelize.STRING},
    club: {type: Sequelize.STRING},
    responsable: {type: Sequelize.STRING}
  }, {
    underscored: true
  });
  return Equipo;
}