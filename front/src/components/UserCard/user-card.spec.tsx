import { screen, render, fireEvent } from '@testing-library/react';
import UserCard from './';
import { AppRouterContextProviderMock } from './useRouterMock';

describe('User Card', () => {
  const push = jest.fn();

  const userData = {
    id: 1,
    login: 'octocat',
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
  };

  it('should render the user details card with the provided data', () => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <UserCard
          id={userData.id}
          login={userData.login}
          avatar={userData.avatar_url}
        />
      </AppRouterContextProviderMock>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('octocat')).toBeInTheDocument();
    const avatarImage = screen.getByTestId('user-card-avatar');
    expect(avatarImage).toHaveAttribute('src', userData.avatar_url);
  });

  it('should redirect to details page agter clicking the card', () => {
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <UserCard
          id={userData.id}
          login={userData.login}
          avatar={userData.avatar_url}
        />
      </AppRouterContextProviderMock>
    );

    const container = screen.getByTestId('user-card-container');
    fireEvent.click(container);
    expect(push).toHaveBeenCalledWith(`/details/${userData.login}`);
  });
});
