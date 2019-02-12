module.exports = (sequelize, Sequelize) => {
  const Campeonato = sequelize.define('campeonato',{
    nombre: {type: Sequelize.STRING},
    cantParticipantes: {type: Sequelize.INTEGER},
    disciplina: {type: Sequelize.STRING},
    activo: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  }, {
        validate: {
          esPotencia() {
            if(this.cantParticipantes < 1) {
              throw new Error('Solo se permiten numeros potencia de dos');
            } else {
              let res = Math.log2(this.cantParticipantes);
              if(res - Math.floor(res) != 0 ) {
                throw new Error('Solo se permiten numeros potencia de dos');
              }
            }
          }
        }
      }, {
        underscored: true
      }
  );
  return Campeonato;
}