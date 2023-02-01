import type { ShipType, ShipTypes } from '../types';

/** Sort ships by their size. */
function sortShips(shipTypes: ShipTypes) {
  return (Object.keys(shipTypes) as ShipType[]).sort(
    (a, b) => shipTypes[b].size - shipTypes[a].size
  );
}

function getTotalCount(shipTypes: ShipTypes): number {
  return Object.values(shipTypes).reduce((count, { size }) => count + size, 0);
}

export function getShipData(shipTypes: ShipTypes) {
  return {
    sortedShips: sortShips(shipTypes),
    totalCount: getTotalCount(shipTypes),
  };
}
