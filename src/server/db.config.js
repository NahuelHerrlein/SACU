var Sequelize=require('sequelize');
var sequelize = new Sequelize("postgres://postgres:postgres@localhost:5432/SACUDB")

let db = {}
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//Traemos todos los modelos
db.Campeonato = require('./Modelos/campeonato.model')(sequelize, Sequelize);
db.Equipo = require('./Modelos/equipo.model')(sequelize, Sequelize);
db.Jugador = require('./Modelos/jugador.model')(sequelize, Sequelize);
db.Etapa = require('./Modelos/etapa.model')(sequelize, Sequelize);
db.Partido = require('./Modelos/partido.model')(sequelize, Sequelize);

//Seteamos las relaciones
db.Etapa.belongsTo(db.Campeonato);
db.Campeonato.hasMany(db.Etapa);

db.Equipo.belongsTo(db.Campeonato);
db.Campeonato.hasMany(db.Equipo);

db.Jugador.belongsTo(db.Equipo);
db.Equipo.hasMany(db.Jugador);

db.Partido.belongsTo(db.Etapa);
db.Etapa.hasMany(db.Partido);

db.Partido.belongsTo(db.Equipo);
db.Equipo.hasMany(db.Partido);

module.exports = db;