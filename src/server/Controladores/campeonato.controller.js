const db = require('../db.config');
const campeonatoModel = db.Campeonato;
const etapaModel = db.Etapa;

exports.getLista = (req, res) => {
  campeonatoModel.findAll().then(campeonatos => {
    res.send(campeonatos);
  });
};

exports.getOneById = (req, res) => {
  let id = req.params.id;
  campeonatoModel.findById(id, {
    include: [{
      model: db.Etapa
    }, {
      model: db.Equipo,
      include: [{
        model: db.Jugador
      }]
    }]
  }).then(campeonato => { 
    //Acomodo el objeto antes de devolverlo
    const ret = Object.assign(
      {},
      { 
        id: campeonato.id,
        nombre: campeonato.nombre,
        cantParticipantes: campeonato.cantParticipantes,
        disciplina: campeonato.disciplina,
        activo: campeonato.activo,
        etapas: campeonato.etapas.map(etapa => {
          //Solo retorno las propiedades necesarias
          return Object.assign(
            {},
            {
              id: etapa.id,
              nombre: etapa.nombre
            }
          )
        }),
        equipos: campeonato.equipos.map(equipo => {
          return Object.assign(
            {},
            {
              id: equipo.id,
              cantJugadores: equipo.cantJugadores,
              nombre: equipo.nombre,
              pais: equipo.pais,
              club: equipo.club,
              responsable: equipo.responsable,
              jugadores: equipo.jugadors.map(jugador => {
                return Object.assign(
                  {},
                  {
                    id: jugador.id,
                    nombre: jugador.nombre,
                    posicion: jugador.posicion
                  }
                )
              })
            }
          )
        })
      }
    )   
    res.json(ret);
  });
};

exports.getActivos = (req, res) => {  
  campeonatoModel.findAll({
    where: {
      activo: true
    }
  }).then(campeonatos => {
    res.send(campeonatos);
  });
};

exports.create = (req, res) => {
  campeonatoModel.create({
    nombre: req.body.nombre,
    cantParticipantes: req.body.cantParticipantes,
    disciplina: req.body.disciplina,
    etapaActualId: null
  }).then(campeonato => {
    res.send(campeonato);
  });
};

exports.avanzar = async (req, res) => {
  campeonatoModel.update({
    etapaActualId: req.params.idEtapa
  }, {
    where: {
      id: req.params.idCampeonato
    }
  }).then((campeonato) => {
    res.send(campeonato);
  });
};

exports.comenzar = async (req, res) => {
  const cantParticipantes = req.body.cantParticipantes;
  const id = req.body.id;
  const etapaSiguienteId = await crearEtapas(cantParticipantes, id);
  campeonatoModel.update({
    etapaActualId: etapaSiguienteId
  }, {
    where: {
      id: id
    },
    returning: true
  }).then(campeonato => {
    res.send(campeonato);
  });
};

crearEtapas = async (participantes, id) => {
  //Creamos todas las etapas del campeonato, empezando por la final
  const cantEtapas = Math.log2(participantes)-1;
  const etapasNombre = ['Final',
                        'Semifinal',
                        'Cuartos de Final',
                        'Octavos de Final',
                        'Rueda de 16',
                        'Rueda de 32',
                        'Rueda de 64',
                        'Rueda de 128',
                        'Rueda de 256'
                      ]
  let etapaSiguienteId = null;
  await etapaModel.create({
      nombre: etapasNombre[0],
      etapaSiguiente: etapaSiguienteId,
      campeonatoId: id,
      campeonato_id: id
    }).then(etapa => {
      etapaSiguienteId = etapa.id;
    });

  for(let i = 1; i <= cantEtapas; i++) {
   await etapaModel.create({
      nombre: etapasNombre[i],
      etapaSiguiente: etapaSiguienteId,
      campeonatoId: id,
      campeonato_id: id
    }).then(etapa => {
      etapaSiguienteId = etapa.id;
    });
  }
  return etapaSiguienteId;
}

exports.finalizar = (req, res) => {
  campeonatoModel.update({
    activo: false
  }, {
    where: {
      id: req.params.id
    }
  }).then((campeonato) => {
    res.send(campeonato);
  });
},

exports.update = (req, res) => {
  campeonatoModel.update({
    nombre: req.body.nombre,
    cantParticipantes: req.body.cantParticipantes,
    disciplina: req.body.disciplina,
    etapaActualId: req.body.etapaActualId
  }, {
    where: {
      id: req.params.id
    }
  }).then((campeonato) => {
    res.send(campeonato);
  });
};

//Soft delete
exports.delete = (req, res) => {
  campeonatoModel.update({
    activo: false
  }, {
    where: {
      id: req.params.id
    }
  }).then((campeonato) => {
    res.send(campeonato);
  });};

