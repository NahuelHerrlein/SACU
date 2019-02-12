const db = require('../db.config');
const jugadorModel = db.Jugador;

exports.getLista = (req, res) => {
  jugadorModel.findAll().then(jugador => {
    res.send(jugador);
  });
};

exports.getOneById = (req, res) => {
  let id = req.params.id;
  jugadorModel.findById(id).then(jugador => {
    res.send(jugador);
  });
};

exports.create = (req, res) => {
  jugadorModel.create({
    nombre: req.body.nombre,
    club: req.body.nombre,
    posicion: req.body.posicion
  }).then(jugador => {
    res.send(jugador);
  });
};

exports.update = (req, res) => {
  jugadorModel.update({
    nombre: req.body.nombre,
    club: req.body.nombre,
    posicion: req.body.posicion
  }, {
    where: {
      id: req.params.id
    }
  }).then(count => {
    console.log("Equipos actualizados: " + count);
  });
};

exports.delete = (req, res) => {
  jugadorModel.destroy({
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
};
