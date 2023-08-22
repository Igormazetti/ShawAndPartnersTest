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
  });

  describe('execute', () => {
    it('on success', async () => {
      jest.spyOn(api, 'get').mockResolvedValueOnce({
        data: {
          ...userMock,
        },
      });
      jest.spyOn(api, 'get').mockResolvedValueOnce({
        data: repositoriesMock,
      });
      const response = await service.execute({ userName: 'dada' });

      expect(response).toEqual({
        userData: { ...userMock },
        repositories: repositoriesMock,
      });
    });

    it('on error', async () => {
      jest.spyOn(api, 'get').mockRejectedValueOnce({
        response: {
          status: 404,
        },
      });
    });
  });
});
