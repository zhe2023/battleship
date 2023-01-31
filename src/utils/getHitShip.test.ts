import { getHitShip } from './getHitShip';
import type { ShipLayout } from '../types';

const mockedLayout: ShipLayout[] = [
  {
    ship: 'carrier',
    positions: [
      [2, 9],
      [3, 9],
    ],
  },
  {
    ship: 'battleship',
    positions: [
      [5, 2],
      [5, 3],
    ],
  },
];

describe('getHitShip', () => {
  it('returns ship name if found', () => {
    expect(getHitShip([5, 2], mockedLayout)).toEqual('battleship');
  });

  it('returns null if not found', () => {
    expect(getHitShip([7, 2], mockedLayout)).toEqual(null);
  });
});
