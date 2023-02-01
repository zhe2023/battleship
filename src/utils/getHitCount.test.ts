import { HitRecord } from '../types';
import { getHitCount } from './getHitCount';

const mockedHitRecords: HitRecord[] = [
  { pos: [1, 3], hit: 'battleship' },
  { pos: [2, 3], hit: null },
  { pos: [3, 3], hit: 'battleship' },
  { pos: [4, 3], hit: 'cruiser' },
];

describe('getHitCount', () => {
  it('returns hit count', () => {
    expect(getHitCount('battleship', mockedHitRecords)).toEqual(2);
  });

  it('returns 0 if not found', () => {
    expect(getHitCount('carrier', mockedHitRecords)).toEqual(0);
  });
});
