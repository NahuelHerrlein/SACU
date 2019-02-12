const db = require('../db.config');
const partidoModel = db.Partido;

exports.getLista = (req, res) => {
  partidoModel.findAll().then(partidos => {
    res.send(partidos);
  });
};

exports.getOneById = (req, res) => {
  let id = req.params.id;
  partidoModel.findById(id).then(partido => {
    res.send(partido);
  });
};

exports.create = (req, res) => {
  partidoModel.create({
    fecha: req.body.fecha,
    lugar: req.body.lugar,
    puntos: req.body.puntos,
    orden: req.body.orden,
    estado: req.body.estado
  }).then(partido => {
    res.send(partido);
  });
};

exports.update = (req, res) => {
  partidoModel.update({
    fecha: req.body.fecha,
    lugar: req.body.lugar,
    puntos: req.body.puntos,
    orden: req.body.orden,
    estado: req.body.estado
  }, {
    where: {
      id: req.params.id
    }
  }).then(count => {
    console.log("Equipos actualizados: " + count);
  });
};

exports.delete = (req, res) => {
  partidoModel.destroy({
    where: {
      id: req.params.id
    }
  }).then(response => res.json(response))
};

