import { Board } from '../Board';
import { Score } from '../Score';
import { HitCount } from '../HitCount';
import { BoardHits } from '../BoardHits';
import { getHitShip } from '../../utils/getHitShip';
import { data } from '../../data';

import type { HitRecords } from '../../types';

import './App.css';
import { useState } from 'react';

export function App() {
  const [hitRecords, setHitRecords] = useState<HitRecords[]>([]);

  const handleHit = (x: number, y: number) => {
    setHitRecords((records) => {
      const exists = records.find(({ pos }) => pos[0] === x && pos[1] === y);
      return exists
        ? records
        : [...records, { pos: [x, y], hit: getHitShip([x, y], data.layout) }];
    });
  };

  return (
    <div className="app__container">
      <div className="app__board">
        <Board onHit={handleHit} />
        <BoardHits hitRecords={hitRecords} />
      </div>

      <div className="app__stat">
        <div className="app__score">
          <Score player="player 1" score={2}></Score>
          <Score player="player 2" score={12}></Score>
        </div>
        <div className="app__hitCount">
          <HitCount shipType="carrier" count={5} />
          <HitCount shipType="battleship" count={4} />
          <HitCount shipType="cruiser" count={3} />
          <HitCount shipType="submarine" count={2} />
          <HitCount shipType="destroyer" count={1} />
        </div>
      </div>
    </div>
  );
}
