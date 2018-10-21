const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const controller = require('./controller');
// const massive = require('massive');
require('dotenv').config();



const app = express();


app.use( bodyParser.json() );
// app.use( controller );
// app.use( axios );



const port = process.env.PORT || 8080
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );




