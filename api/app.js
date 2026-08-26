import express from 'express';
import healthRouter from './v1/auth/routes.js';

const app = express();

app.use(express.json());
app.use(healthRouter);

export default app;
