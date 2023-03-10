import { render, screen } from '@testing-library/react';
import { BoardHits } from './BoardHits';

describe('BoardHits', () => {
  it('renders correct position', () => {
    render(<BoardHits hitRecords={[{ pos: [2, 3], hit: 'carrier' }]} />);

    expect(screen.getByAltText('hit-mark')).toHaveStyle({
      left: '20%',
      top: '30%',
    });
  });

  it('renders correct hit status', () => {
    render(<BoardHits hitRecords={[{ pos: [2, 3], hit: 'carrier' }]} />);

    expect(screen.getByAltText('hit-mark')).toHaveAttribute('src', 'hit.png');
  });

  it('renders correct miss status', () => {
    render(<BoardHits hitRecords={[{ pos: [2, 3], hit: null }]} />);

    expect(screen.getByAltText('miss-mark')).toHaveAttribute('src', 'miss.png');
  });
});
