import carrier from '../../assets/carrier-shape.png';
import battleship from '../../assets/battleship-shape.png';
import cruiser from '../../assets/cruiser-shape.png';
import submarine from '../../assets/submarine-shape.png';
import destroyer from '../../assets/destroyer-shape.png';
import hit from '../../assets/hit-small.png';
import miss from '../../assets/miss-small.png';

import './HitCount.css';

const SHIP_ICON_MAP = {
  carrier: carrier,
  battleship: battleship,
  cruiser: cruiser,
  submarine: submarine,
  destroyer: destroyer,
};

interface HitCountProps {
  ship: 'carrier' | 'battleship' | 'cruiser' | 'submarine' | 'destroyer';
  count: number;
}

export const HitCount: React.FC<HitCountProps> = ({ ship, count }) => {
  return (
    <div className="hitCount__container">
      <img className="hitCount__ship" src={SHIP_ICON_MAP[ship]} alt={ship} />
      {[...new Array(5)].map((_, i) => {
        const isHit = i < count;
        return (
          <img
            key={`${ship}-${i}`}
            data-testid="hitCount__icon"
            className="hitCount__hit"
            src={isHit ? hit : miss}
            alt={isHit ? 'hit' : 'miss'}
          />
        );
      })}
    </div>
  );
};
