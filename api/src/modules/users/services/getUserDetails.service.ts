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

    return {
      userData: {
        id: response.data.id,
        login: response.data.login,
        avatar_url: response.data.avatar_url,
        html_url: response.data.html_url,
        created_at: response.data.data,
      },
      repositories: repos.data,
    };
  }
}
