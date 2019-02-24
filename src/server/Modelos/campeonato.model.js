module.exports = (sequelize, Sequelize) => {
  const Campeonato = sequelize.define('campeonato',{
    nombre: {type: Sequelize.STRING},
    cantParticipantes: {type: Sequelize.INTEGER},
    disciplina: {type: Sequelize.STRING},
    activo: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    etapaActualId: {type: Sequelize.INTEGER}
  }, {
        validate: {
          esPotencia() {
            return this.cantParticipantes && !(this.cantParticipantes & (this.cantParticipantes - 1));
          }
        }
      }, {
        underscored: true
      }
  );
  return Campeonato;
}