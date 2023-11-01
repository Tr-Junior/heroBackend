require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose')
const router = express.Router();
const cors = require('cors');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

const corsOptions = {
    origin: process.env.APP_URL,
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Origin,X-Requested-with,Content-Type,Accept,x-access-token',
};

app.use(cors(corsOptions));

const Ongs = require('./models/ongs');
const Incidents = require('./models/incidents');

const indexRoute = require('./routes/index-route');
const ongsRoute = require('./routes/ongs-route');
const incidentsRoute = require('./routes/incidents-route');

app.use('/', indexRoute);
app.use('/ongs', ongsRoute);
app.use('/incidents', incidentsRoute);

module.exports = app;
