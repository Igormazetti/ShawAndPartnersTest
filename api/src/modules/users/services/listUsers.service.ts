import { CustomError } from 'common/error/CustomError';
import { api } from 'lib/api';

type Request = {
  since?: number;
};

export default class ListUsersService {
  public async execute({ since = 1 }: Request) {
    const regex =
      /<https:\/\/api\.github\.com\/users\?since=(\d+)&per_page=\d+>; rel="next"/;
    const response = await api.get(`/users?since=${since}&per_page=10`);

    const nextPageNumber = response.headers.link.match(regex);
    console.log(nextPageNumber[1]);

    if (!response)
      throw new CustomError('Request failed to retrieve users', 400);

    return { users: response.data, nextPageNumber: Number(nextPageNumber[1]) };
  }
}
