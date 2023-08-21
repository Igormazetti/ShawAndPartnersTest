import { Router } from 'express';
import ListUsersController from '../controllers/ListUsers.controller';

const usersRouter = Router();
const listUsersController = new ListUsersController();

usersRouter.get('/', listUsersController.execute);

export default usersRouter;
