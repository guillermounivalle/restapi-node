//server code
//Morgan permite ver por consola los requerimientos http que van llegando
const express = require ('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('dev'));

app.use(require('./routes/index'));


module.exports = app;