const express = require('express');

const shipsRouter = require('./routes/ships');

const app = express();

app.use(express.json());
app.use('/v1/ships', shipsRouter);

app.listen(4242);
