import type { HitRecord } from '../../types';

import hitImg from '../../assets/hit.png';
import missImg from '../../assets/miss.png';

import './BoardHits.css';

interface BoardHitsProps {
  hitRecords: HitRecord[];
}

export const BoardHits: React.FC<BoardHitsProps> = ({ hitRecords }) => {
  return (
    <div className="boardHits__container">
      {hitRecords.map(({ pos: [x, y], hit }) => (
        <img
          key={`${x}-${y}-${hit}`}
          className="boardHits__cell"
          data-testid="boardHits__cell"
          src={hit ? hitImg : missImg}
          alt={hit ? 'hit-mark' : 'miss-mark'}
          style={{ left: `${x * 10}%`, top: `${y * 10}%` }}
        />
      ))}
    </div>
  );
};
