import { useCallback, useState } from 'react';
import { Board } from '../Board';
import { Score } from '../Score';
import { HitCount } from '../HitCount';
import { BoardHits } from '../BoardHits';
import { getHitShip, getHitCount, getShipData } from '../../utils';
import { data } from '../../data';

import type { HitRecord } from '../../types';

import './App.css';

const shipData = getShipData(data.shipTypes);

export function App() {
  const [hitRecords, setHitRecords] = useState<HitRecord[]>([]);

  const score = hitRecords.reduce((count, { hit }) => {
    return hit !== null ? count + 1 : count;
  }, 0);
  const win = score === shipData.totalCount;

  const handleHit = useCallback(
    (x: number, y: number) => {
      if (win) {
        return;
      }
      setHitRecords((records) => {
        const exists = records.find(({ pos }) => pos[0] === x && pos[1] === y);
        return exists
          ? records
          : [...records, { pos: [x, y], hit: getHitShip([x, y], data.layout) }];
      });
    },
    [win]
  );

  return (
    <div className="app__container">
      <div className="app__board">
        <Board onHit={handleHit} />
        <BoardHits hitRecords={hitRecords} />
      </div>

      <div className="app__stat">
        <div className="app__score">
          <Score player="player 1" score={score} win={win}></Score>
          <Score player="player 2" score={0}></Score>
        </div>

        <div className="app__hitCount">
          {shipData.sortedShips.map((shipType) => (
            <HitCount
              key={shipType}
              shipType={shipType}
              size={data.shipTypes[shipType].size}
              count={getHitCount(shipType, hitRecords)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
