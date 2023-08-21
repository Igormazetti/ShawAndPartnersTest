import { CustomError } from 'common/error/CustomError';
import { api } from 'lib/api';

type Request = {
  userName: string;
};

export default class GetUserDetailsService {
  public async execute({ userName }: Request) {
    const response = await api.get(`/users/${userName}`);

    if (!response)
      throw new CustomError('Request failed to retrieve user details', 400);

    return response.data;
  }
}
