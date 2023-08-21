import 'reflect-metadata';
import express from 'express';
import usersRouter from 'modules/users/routes/users.route';

const app = express();
app.use(express.json());
app.use('/users', usersRouter);

export default app;
