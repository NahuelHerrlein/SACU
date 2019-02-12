const db = require('../db.config');
const equipoModel = db.Equipo;

exports.getLista = (req, res) => {
  equipoModel.findAll().then(equipos => {
    res.send(equipos);
  });
};

exports.getOneById = (req, res) => {
  let id = req.params.id;
  equipoModel.findById(id).then(equipo => {
    res.send(equipo);
  });
};

exports.create = (req, res) => {
  const equipo = req.body.equipo;
  equipoModel.create({
    cantJugadores: equipo.cantJugadores,
    nombre: equipo.nombre,
    campeonato_id: equipo.campeonatoId,
    pais: equipo.pais,
    club: equipo.club,
    responsable: equipo.responsable
  }).then(equipo => {
    res.send(equipo);
  });
};

exports.update = (req, res) => {
  equipoModel.update({
    cantJugadores: req.body.cantJugadores,
    nombre: req.body.nombre,
    pais: req.body.pais,
    club: req.body.club,
    responsable: req.body.responsable
  }, {
    where: {
      id: req.params.id
    }
  }).then(count => {
    console.log("Equipos actualizados: " + count);
  });
};

exports.delete = (req, res) => {
  equipoModel.destroy({
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
};

