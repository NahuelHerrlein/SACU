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
      model: db.Equipo
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
              responsable: equipo.responsable
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
    disciplina: req.body.disciplina
  }).then(campeonato => {
    crearEtapas(campeonato.cantParticipantes, campeonato.id);
    res.send(campeonato);
  });
};

crearEtapas = (participantes, id) => {
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
  etapaModel.create({
      nombre: etapasNombre[0],
      etapaSiguiente: "",
      campeonatoId: id
    }).then(() => {
      console.log("La etapa Final fue creada con exito");
  });

  for(let i = 1; i <= cantEtapas; i++) {
    etapaModel.create({
      nombre: etapasNombre[i],
      etapaSiguiente: etapasNombre[i-1],
      campeonatoId: id
    }).then(() => {
      console.log("La Etapa " + etapasNombre[i] +" fue creada con exito");
    });
  }
}

exports.update = (req, res) => {
  campeonatoModel.update({
    nombre: req.body.nombre,
    cantParticipantes: req.body.cantParticipantes,
    disciplina: req.body.disciplina
  }, {
    where: {
      id: req.params.id
    }
  }).then((campeonato) => {
    res.send(campeonato);
  });
};

exports.delete = (req, res) => {
  campeonatoModel.destroy({
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
};

