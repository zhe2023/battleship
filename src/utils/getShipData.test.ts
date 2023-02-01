import { getShipData } from './getShipData';
import { data } from '../data';

describe('getShipData', () => {
  it('returns sorted ships', () => {
    expect(getShipData(data.shipTypes).sortedShips).toEqual([
      'carrier',
      'battleship',
      'cruiser',
      'submarine',
      'destroyer',
    ]);
  });

  it('returns total cell count', () => {
    expect(getShipData(data.shipTypes).totalCount).toEqual(17);
  });
});
