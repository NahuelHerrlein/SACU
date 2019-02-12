var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(upload.array());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

const db = require('./db.config')
db.sequelize.sync({
  alter:true
}).then(() => {
  console.log("Todas las tablas creadas");
});

require('./Rutas/routes')(app);

app.listen(3001, () => {
  console.log("Servidor Funcionando");
});
