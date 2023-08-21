import { api } from 'lib/api';

type Request = {
  since?: number;
};

export default class ListUsersService {
  public async execute({ since = 1 }: Request) {
    const response = await api.get(`/users?since=${since}&per_page=10`);
    return response.data;
  }
}
