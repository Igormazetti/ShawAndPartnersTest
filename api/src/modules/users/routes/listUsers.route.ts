import { Router } from 'express';
import ListUsersController from '../controllers/listUsers.controller';

const usersRouter = Router();
const listUsersController = new ListUsersController();

usersRouter.get('/', listUsersController.execute);

export default usersRouter;
