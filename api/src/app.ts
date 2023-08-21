import 'reflect-metadata';
import express from 'express';
import usersRouter from 'modules/users/routes/users.route';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

export default app;
