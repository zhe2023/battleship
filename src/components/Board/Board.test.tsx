import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Board } from './Board';

describe('Board', () => {
  it('renders 100 cells on the board', () => {
    render(<Board />);

    expect(screen.getAllByTestId(/board__cell/)).toHaveLength(100);
  });

  it('sends out the position when clicking on the board', async () => {
    const mockedOnHit = jest.fn();
    render(<Board onHit={mockedOnHit} />);

    await userEvent.click(screen.getByTestId('board__cell-2-3'));

    expect(mockedOnHit).toBeCalledWith(2, 3);
  });
});
