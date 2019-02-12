module.exports = (sequelize, Sequelize) => {
  const Jugador = sequelize.define('jugador', {
    nombre: {type: Sequelize.STRING},
    club: {type: Sequelize.STRING},
    posicion: {type: Sequelize.STRING}
  });

  return Jugador;
}
