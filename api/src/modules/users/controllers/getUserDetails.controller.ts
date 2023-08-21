import { Request, Response } from 'express';
import GetUserDetailsService from '../services/getUserDetails.service';

export default class GetUserDetailsController {
  public async execute(request: Request, response: Response) {
    const { username } = request.params;
    const service = new GetUserDetailsService();

    const usersList = await service.execute({ userName: username });

    return response.status(200).json(usersList);
  }
}
