const db = require('../db.config');
const equipoModel = db.Equipo;

exports.getLista = (req, res) => {
  equipoModel.findAll({
    where: {
      activo: true,
    }
  }).then(equipos => {
    res.send(equipos);
  });
};

exports.getEquiposCampeonato = (req, res) => {
  equipoModel.findAll({
    where: {
      activo: true,
      campeonatoId: req.params.idCampeonato
    }
  }).then(equipos => {
    res.send(equipos);
  });
};

exports.getOneById = (req, res) => {
  let reqId = req.params.id;
  equipoModel.findById(reqId, {
    include: [{
      model: db.Jugador,
    }]
  }).then(equipo => {
    if(equipo) {
      const ret = Object.assign(
        {},
        {
          id: equipo.id,
          cantJugadores: equipo.cantJugadores,
          nombre: equipo.nombre,
          pais: equipo.pais,
          club: equipo.club,
          jugadores: equipo.jugadors.map(jugador => {
            return Object.assign(
              {},
              {
                id: jugador.id,
                nombre: jugador.nombre,
                equipoId: equipo.id,
                club: jugador.club,
                posicion: jugador.posicion
              }
            )
          }),
          responsable: equipo.responsable,
          campeonatoId: equipo.campeonatoId
        }
      )
      res.json(ret);
    }
  });
};

exports.create = (req, res) => {
  equipoModel.create({
    cantJugadores: req.body.cantJugadores,
    nombre: req.body.nombre,
    campeonato_id: req.body.campeonatoId,
    pais: req.body.pais,
    club: req.body.club,
    responsable: req.body.responsable,
    campeonatoId: req.body.campeonatoId
  }).then(equipo => {
    res.send(equipo);
  });
};

exports.fijarPartido = (req, res) => {
  equipoModel.update({
    partidoId: req.params.idPartido,
    partido_id: req.params.idPartido,
  }, {
    where: {
      id: req.params.idEquipo
    }
    }).then(count => {
      res.send(count);
    });
};

exports.update = (req, res) => {
  equipoModel.update({
    cantJugadores: req.body.cantJugadores,
    nombre: req.body.nombre,
    pais: req.body.pais,
    club: req.body.club,
    responsable: req.body.responsable,
    activo: req.body.activo
  }, {
    where: {
      id: req.params.id
    }
  }).then(count => {
    res.send(count);
  });
};

exports.perdedor = (req, res) => {
  equipoModel.update({
    activo: false
  }, {
    where: {
      id: req.params.id
    }
  }).then(count => {
    res.send(count);
  });
};

//Soft delete
exports.delete = (req, res) => {
  equipoModel.update({
    activo: false
  }, {
    where: {
      id: req.params.id
    }
  }).then((equipo) => {
    res.send(equipo);
  });};

