import { randomBytes } from 'crypto';
import { api } from '../../../lib/api';
import GetUserDetailsService from './getUserDetails.service';

jest.mock('../../../lib/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

let service: GetUserDetailsService;

const userMock = {
  id: randomBytes(4).toString('hex'),
  login: 'octocat',
  avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  html_url: 'https://api.github.com/users/octocat',
  created_at: '2011-01-25T18:44:36Z',
};

const repositoriesMock = [
  {
    id: 17358646,
    name: 'asteroids',
    url: 'https://api.github.com/repos/mojombo/asteroids',
  },
];

describe('Get User Details', () => {
  beforeEach(() => {
    service = new GetUserDetailsService();

    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should be able to get user details', async () => {
      jest.spyOn(api, 'get').mockResolvedValueOnce({
        data: {
          ...userMock,
        },
      });
      jest.spyOn(api, 'get').mockResolvedValueOnce({
        data: repositoriesMock,
      });
      const response = await service.execute({ userName: 'octocat' });

      expect(response).toEqual({
        userData: { ...userMock },
        repositories: repositoriesMock,
      });
    });

    it('should throw error on failure get user details', async () => {
      jest.spyOn(api, 'get').mockRejectedValueOnce(null);

      expect(async () =>
        expect(await service.execute({ userName: 'octocat' })).toThrowError(),
      );
    });
  });
});
