export type ShipType =
  | 'carrier'
  | 'battleship'
  | 'cruiser'
  | 'submarine'
  | 'destroyer';

export type ShipTypes = {
  [K in ShipType]: { size: number; count: number };
};

export type ShipLayout = {
  ship: ShipType;
  positions: [number, number][];
};

export type HitRecords = {
  pos: [number, number];
  hit: ShipType | null;
};
