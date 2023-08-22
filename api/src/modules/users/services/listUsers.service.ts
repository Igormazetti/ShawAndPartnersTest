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

    if (!response)
      throw new CustomError('Request failed to retrieve users', 400);

    const smallestId = findMinId(response.data);

    function findMinId(users: any[]): number {
      return users.reduce((minId, user) => {
        return user.id < minId ? user.id : minId;
      }, Infinity);
    }

    const match = response.headers.link.match(regex);
    if (!match || !match[1])
      throw new CustomError('Failed to match nextPageNumber from headers', 400);

    const nextPageNumber = Number(match[1]);

    return {
      users: response.data,
      nextPageNumber: nextPageNumber,
      prevPageNumber: smallestId === 1 ? 1 : smallestId - 1,
    };
  }
}
