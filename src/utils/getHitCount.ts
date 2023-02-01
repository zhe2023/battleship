import type { ShipType, HitRecord } from '../types';

/**
 * Returns hit count for the given ship.
 */
export function getHitCount(
  shipType: ShipType,
  hitRecords: HitRecord[]
): number {
  return hitRecords.reduce((count, { hit }) => {
    return shipType === hit ? count + 1 : count;
  }, 0);
}
