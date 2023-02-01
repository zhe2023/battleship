import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';
import { data } from '../../data';

describe('App', () => {
  describe('Board', () => {
    it('adds hit/miss mark correctly when clicking on the board', async () => {
      render(<App />);

      await userEvent.click(screen.getByTestId('board__cell-1-0'));
      await userEvent.click(screen.getByTestId('board__cell-2-1'));

      expect(screen.getAllByTestId('boardHits__cell')).toHaveLength(2);
      expect(screen.getByAltText('hit-mark')).toBeInTheDocument();
      expect(screen.getByAltText('miss-mark')).toBeInTheDocument();
    });

    it('does not add extra element when clicking on a marked cell', async () => {
      render(<App />);

      await userEvent.click(screen.getByTestId('board__cell-2-1'));
      await userEvent.click(screen.getByTestId('board__cell-2-1'));

      expect(screen.getAllByTestId('boardHits__cell')).toHaveLength(1);
    });
  });

  describe('Score', () => {
    it('shows the score correctly', async () => {
      render(<App />);

      await userEvent.click(screen.getByTestId('board__cell-1-0'));
      await userEvent.click(screen.getByTestId('board__cell-2-1'));

      expect(screen.getByText('01')).toBeInTheDocument();
    });

    it('does not respond to board click after winning', async () => {
      render(<App />);

      // Click all ship cells
      const allClicks = data.layout
        .flatMap(({ positions }) => positions)
        .map(async ([x, y]) =>
          userEvent.click(screen.getByTestId(`board__cell-${x}-${y}`))
        );

      await Promise.all(allClicks);
      expect(screen.getByText('WIN')).toBeInTheDocument();
      expect(screen.getAllByTestId('boardHits__cell')).toHaveLength(17);

      await userEvent.click(screen.getByTestId('board__cell-2-1'));
      expect(screen.getAllByTestId('boardHits__cell')).toHaveLength(17);
    });
  });

  describe('HitCount', () => {
    it.each([
      ['carrier', 5],
      ['battleship', 4],
      ['cruiser', 3],
      ['submarine', 3],
      ['destroyer', 2],
    ])('shows the ship %s size correctly', (ship, size) => {
      render(<App />);

      const shipRow = screen.getByTestId(`hitCount__${ship}`);
      expect(shipRow).toBeInTheDocument();
      expect(within(shipRow).getAllByTestId('hitCount__icon')).toHaveLength(
        size
      );
    });

    it('shows the hit count correctly', async () => {
      render(<App />);

      await userEvent.click(screen.getByTestId('board__cell-1-0'));

      const destroyer = screen.getByTestId(`hitCount__destroyer`);
      expect(within(destroyer).getByAltText('hit')).toBeInTheDocument();
      expect(within(destroyer).getByAltText('miss')).toBeInTheDocument();
    });
  });
});
