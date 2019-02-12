const db = require('../db.config');
const etapaModel = db.Etapa;

exports.getLista = (req, res) => {
  etapaModel.findAll().then(etapa => {
    res.send(etapa);
  });
};

exports.getOneById = (req, res) => {
  let id = req.params.id;
  etapaModel.findById(id).then(etapa => {
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

