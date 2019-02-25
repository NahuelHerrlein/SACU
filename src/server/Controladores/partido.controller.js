const db = require('../db.config');
const partidoModel = db.Partido;
const equipoModel = db.Equipo;

exports.getLista = (req, res) => {
  partidoModel.findAll().then(partidos => {
    res.send(partidos);
  });
};

exports.getOneById = (req, res) => {
  let id = req.params.id;
  partidoModel.findById(id, {
    include: [{
      model: db.Equipo
    }]
  }).then(partido => {
    res.send(partido);
  })
}


exports.getPartidosEtapa = (req, res) => {
  partidoModel.findAll({
    where: {
      etapaId: req.params.idEtapa
    }
  }, {
    include: [{
      model: db.Equipo
    }]
  }).then(partidos => {
    res.send(partidos);
  });
};

exports.create = (req, res) => {
  partidoModel.create({
    orden: req.body.orden,
    etapaId: req.body.etapaId,
    etapa_id: req.body.etapaId,
    nroPartido: req.body.nroPartido
  }).then(partido => {
    const ret = Object.assign(
      {},
      {
        id: partido.id,
        orden: partido.orden,
        estado: partido.estado,
        nroPartido: partido.nroPartido,
        equipos: [req.body.equipos[0], req.body.equipos[1]],
      }
    )
    res.send(ret);
  });
};

exports.update = (req, res) => {
  partidoModel.update({
    fecha: req.body.fecha,
    lugar: req.body.lugar,
    puntos: req.body.puntos,
    estado: req.body.estado
  }, {
    where: {
      id: req.params.id
    }
  }).then(count => {
    res.send(count);
  });
};

exports.delete = (req, res) => {
  partidoModel.destroy({
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
};

