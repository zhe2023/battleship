import { render, screen } from '@testing-library/react';
import { BoardHits } from './BoardHits';

describe('BoardHits', () => {
  it('renders correct position', () => {
    render(<BoardHits hitRecords={[{ pos: [2, 3], hit: true }]} />);

    expect(screen.getByAltText('hit')).toHaveStyle({ left: '20%', top: '30%' });
  });

  it('renders correct hit status', () => {
    render(<BoardHits hitRecords={[{ pos: [2, 3], hit: true }]} />);

    expect(screen.getByAltText('hit')).toHaveAttribute('src', 'hit.png');
  });

  it('renders correct miss status', () => {
    render(<BoardHits hitRecords={[{ pos: [2, 3], hit: false }]} />);

    expect(screen.getByAltText('miss')).toHaveAttribute('src', 'miss.png');
  });
});
