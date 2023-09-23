const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// initalize
const app = express();

// Parseo del body d elas solicitudes como JSON
app.use( bodyparser.json() );

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// app routes
const indexRoutes = require('./index.routes');

// app settings
app.use(indexRoutes);

// Puerto de la app
const port = 3000;

app.listen( port, ()=>{
    console.log(`App on running in http://localhost:${port}`)
} );