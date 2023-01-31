import { Board } from '../Board';
import { Score } from '../Score';
import { HitCount } from '../HitCount';
import { BoardHits } from '../BoardHits';

import './App.css';

export function App() {
  return (
    <div className="app__container">
      <div className="app__board">
        <Board onHit={(x, y) => console.log(x, y)} />
        <BoardHits
          hitRecords={[
            { pos: [2, 3], hit: true },
            { pos: [6, 8], hit: false },
            { pos: [0, 0], hit: false },
            { pos: [9, 9], hit: false },
          ]}
        />
      </div>

      <div className="app__stat">
        <div className="app__score">
          <Score player="player 1" score={2}></Score>
          <Score player="player 2" score={12}></Score>
        </div>
        <div className="app__hitCount">
          <HitCount ship="carrier" count={5} />
          <HitCount ship="battleship" count={4} />
          <HitCount ship="cruiser" count={3} />
          <HitCount ship="submarine" count={2} />
          <HitCount ship="destroyer" count={1} />
        </div>
      </div>
    </div>
  );
}
