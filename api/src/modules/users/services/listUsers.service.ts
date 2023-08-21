import { CustomError } from 'common/error/CustomError';
import { api } from 'lib/api';

type Request = {
  since?: number;
};

export default class ListUsersService {
  public async execute({ since = 1 }: Request) {
    const response = await api.get(`/users?since=${since}&per_page=10`);

    if (!response)
      throw new CustomError('Request failed to retrieve users', 400);

    return response.data;
  }
}
