import { Request, Response } from 'express';
import ListUsersService from '../services/listUsers.service';

export default class ListUsersController {
  public async execute(request: Request, response: Response) {
    const { since } = request.params;
    const service = new ListUsersService();

    const usersList = await service.execute({ since: Number(since) });

    return response.status(200).json(usersList);
  }
}
