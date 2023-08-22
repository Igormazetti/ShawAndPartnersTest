import { screen, render } from '@testing-library/react';
import DetailsTable from './';

describe('Details Table Component', () => {
  const repositories = [
    {
      id: 17358646,
      name: 'asteroids',
      url: 'https://api.github.com/repos/mojombo/asteroids',
    },
  ];

  it('should render the repositories details table with the provided data', () => {
    render(<DetailsTable tableContent={repositories} />);

    expect(screen.getByText('17358646')).toBeInTheDocument();
    expect(screen.getByText('asteroids')).toBeInTheDocument();
    expect(
      screen.getByText('https://api.github.com/repos/mojombo/asteroids')
    ).toBeInTheDocument();
  });
});
