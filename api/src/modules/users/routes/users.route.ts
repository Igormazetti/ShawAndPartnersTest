import { Router } from 'express';
import ListUsersController from '../controllers/listUsers.controller';
import GetUserDetailsController from '../controllers/getUserDetails.controller';

const usersRouter = Router();
const listUsersController = new ListUsersController();
const getUserDetailsController = new GetUserDetailsController();

usersRouter.get('/details/:username', getUserDetailsController.execute);
usersRouter.get('/:since?', listUsersController.execute);

export default usersRouter;
