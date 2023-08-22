import { CustomError } from '../../../common/error/CustomError';
import { api } from '../../../lib/api';

type Request = {
  since?: number;
};

export default class ListUsersService {
  private REGEX_ON_NEXT_PAGE =
    /<https:\/\/api\.github\.com\/users\?since=(\d+)&per_page=\d+>; rel="next"/;

  public async execute({ since = 1 }: Request) {
    const response = await api.get(`/users?since=${since}&per_page=10`);

    if (!response)
      throw new CustomError('Request failed to retrieve users', 400);

    const nextPageNumber = response.headers.link.match(this.REGEX_ON_NEXT_PAGE);

    return {
      users: response.data,
      nextPageNumber: Number(nextPageNumber[1]),
    };
  }
}
