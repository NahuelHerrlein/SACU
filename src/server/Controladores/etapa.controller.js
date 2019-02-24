const db = require('../db.config');
const etapaModel = db.Etapa;

exports.getLista = (req, res) => {
  etapaModel.findAll().then(etapa => {
    res.send(etapa);
  });
};

exports.getOneById = (req, res) => {
  let id = req.params.id;
  etapaModel.findById(id, {
    include: [{
      model: db.Partido,
      include: [{
        model: db.Equipo
      }]
    }]
  }).then(etapa => {
    const ret = Object.assign(
      {},
      {
        nombre: etapa.nombre,
        etapaSiguiente: etapa.etapaSiguiente,
        campeonatoId: etapa.campeonatoId,
        partidos: etapa.partidos.map(partido => {
          return Object.assign(
            {},
            {
              id: partido.id,
              fecha: partido.fecha,
              lugar: partido.lugar,
              puntos: partido.puntos,
              orden: partido.orden,
              estado: partido.estado,
              nroPartido: partido.nroPartido,
              equipos: partido.equipos.map(equipo => {
                return Object.assign(
                  {},
                  {
                    id: equipo.id,
                    nombre: equipo.nombre,
                    cantJugadores: equipo.cantJugadores,
                    pais: equipo.pais,
                    club: equipo.club,
                    responsable: equipo.responsable
                  }
                )
              })
            }
          )
        })
      }
    )
    res.send(etapa);
  });
};

exports.create = (req, res) => {
  etapaModel.create({
    nombre: req.body.nombre,
  }).then(etapa => {
    res.send(etapa);
  });
};

exports.update = (req, res) => {
  etapaModel.update({
    nombre: req.body.nombre,
  }, {
    where: {
      id: req.params.id
    }
  }).then(count => {
    console.log("Etapas actualizados: " + count);
  });
};

exports.delete = (req, res) => {
  etapaModel.destroy({
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
};

