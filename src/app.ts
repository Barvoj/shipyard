import express from 'express';
import shipsRouter from './routes/ships';

const app: express.Application = express();

app.use(express.json());
app.use('/v1/ships', shipsRouter);

app.listen(4242);
