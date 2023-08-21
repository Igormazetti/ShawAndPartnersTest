import { CustomError } from 'common/error/CustomError';
import { api } from 'lib/api';

type Request = {
  userName: string;
};

export default class GetUserDetailsService {
  public async execute({ userName }: Request) {
    const [response, repos] = await Promise.all([
      api.get(`/users/${userName}`),
      api.get(`/users/${userName}/repos`),
    ]);

    if (!response.data || !repos.data)
      throw new CustomError('Request failed to retrieve user details', 400);

    return { userData: response.data, repositories: repos.data };
  }
}
