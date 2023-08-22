import { screen, render } from '@testing-library/react';
import UserDetailsCard from './';

describe('User Details Card', () => {
  const userDetailsData = {
    id: 1,
    login: 'octocat',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    profile_url: 'https://api.github.com/users/octocat',
    created_at: '2011-01-25T18:44:36Z',
    repositories: [
      {
        id: 17358646,
        name: 'asteroids',
        url: 'https://api.github.com/repos/mojombo/asteroids',
      },
    ],
  };

  it('should render the user details card with the provided data', () => {
    render(
      <UserDetailsCard
        id={userDetailsData.id}
        login={userDetailsData.login}
        avatar={userDetailsData.avatar_url}
        profileUrl={userDetailsData.profile_url}
        createdAt={userDetailsData.created_at}
        repositories={userDetailsData.repositories}
      />
    );

    expect(screen.getByTestId('user-name')).toHaveTextContent('octocat');
    expect(screen.getByTestId('user-id')).toHaveTextContent('1');
    expect(screen.getByTestId('profile-url')).toHaveTextContent(
      'https://api.github.com/users/octocat'
    );
    expect(screen.getByTestId('creation-date')).toHaveTextContent('25/01/2011');
  });
});
