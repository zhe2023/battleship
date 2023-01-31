import type { HitRecords } from '../../types';

import hitImg from '../../assets/hit.png';
import missImg from '../../assets/miss.png';

import './BoardHits.css';

interface BoardHitsProps {
  hitRecords: HitRecords[];
}

export const BoardHits: React.FC<BoardHitsProps> = ({ hitRecords }) => {
  return (
    <div className="boardHits__container">
      {hitRecords.map(({ pos: [x, y], hit }) => (
        <img
          key={`${x}-${y}-${hit}`}
          className="boardHits__cell"
          src={hit ? hitImg : missImg}
          alt={hit ? 'hit' : 'miss'}
          style={{ left: `${x * 10}%`, top: `${y * 10}%` }}
        />
      ))}
    </div>
  );
};
