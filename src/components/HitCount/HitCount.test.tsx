import { render, screen } from '@testing-library/react';
import { HitCount } from './HitCount';

describe('HitCount', () => {
  it('renders ship image', () => {
    render(<HitCount ship="carrier" count={1} />);

    const img = screen.getByAltText('carrier');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'carrier-shape.png');
  });

  it('renders correct hit count', () => {
    render(<HitCount ship="carrier" count={3} />);

    const icons = screen.getAllByTestId<HTMLImageElement>('hitCount__icon');
    const alts = icons.map(({ alt }) => alt);
    expect(alts).toEqual(['hit', 'hit', 'hit', 'miss', 'miss']);
  });
});
