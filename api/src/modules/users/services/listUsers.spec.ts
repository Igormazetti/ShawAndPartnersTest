import { randomBytes } from 'crypto';
import { api } from '../../../lib/api';
import ListUsersService from './listUsers.service';

jest.mock('../../../lib/api', () => ({
  api: {
    get: jest.fn(),
  },
}));

let service: ListUsersService;

const userMock = [
  {
    id: randomBytes(4).toString('hex'),
    login: 'octocat',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  },
];

describe('List Users', () => {
  beforeEach(() => {
    service = new ListUsersService();

    jest.clearAllMocks();
  });

  describe('execute', () => {
    it('should be able to get users list', async () => {
      jest.spyOn(api, 'get').mockResolvedValueOnce({
        data: {
          ...userMock,
        },
        headers: {
          link: '<https://api.github.com/users?since=19&per_page=10>; rel="next", <https://api.github.com/users{?since}>; rel="first"',
        },
      });
      const response = await service.execute({});

      expect(response).toEqual({
        users: { ...userMock },
        nextPageNumber: 19,
      });
    });

    it('should throw error on failure get user details', async () => {
      jest.spyOn(api, 'get').mockRejectedValueOnce(undefined);

      expect(async () => expect(await service.execute({})).toThrowError());
    });
  });
});
