import { render, screen } from '@testing-library/react';
import { HitCount } from './HitCount';

describe('HitCount', () => {
  it('renders ship image', () => {
    render(<HitCount shipType="carrier" size={5} count={1} />);

    const img = screen.getByAltText('carrier');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'carrier-shape.png');
  });

  it('renders correct hit size', () => {
    render(<HitCount shipType="carrier" size={5} count={3} />);

    const icons = screen.getAllByTestId<HTMLImageElement>('hitCount__icon');
    expect(icons).toHaveLength(5);
  });

  it('renders correct hit count', () => {
    render(<HitCount shipType="carrier" size={5} count={3} />);

    const icons = screen.getAllByTestId<HTMLImageElement>('hitCount__icon');
    const alts = icons.map(({ alt }) => alt);
    expect(alts).toEqual(['hit', 'hit', 'hit', 'miss', 'miss']);
  });
});
