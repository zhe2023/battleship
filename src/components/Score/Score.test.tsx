import { render, screen } from '@testing-library/react';
import { Score } from './Score';

describe('Score', () => {
  it('renders player name and score number', () => {
    render(<Score player="player 1" score={99} />);

    expect(screen.getByText('player 1')).toBeInTheDocument();
    expect(screen.getByText('99')).toBeInTheDocument();
  });

  it('renders leading 0 when score < 10', () => {
    render(<Score player="player 1" score={1} />);

    expect(screen.getByText('01')).toBeInTheDocument();
  });
});
