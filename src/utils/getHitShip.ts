import type { ShipType, ShipLayout } from '../types';

/**
 * Returns ship name if the given position can be found in layout data.
 */
export function getHitShip(
  [x, y]: [number, number],
  shipLayout: ShipLayout[]
): ShipType | null {
  const found = shipLayout.find(({ positions }) => {
    return !!positions.find((pos) => x === pos[0] && y === pos[1]);
  });

  return found ? found.ship : null;
}
