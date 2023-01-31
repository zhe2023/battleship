import { Board } from '../Board';
import { Score } from '../Score';
import { HitCount } from '../HitCount';

import './App.css';

export function App() {
  return (
    <div className="app__container">
      <Board className="app__board" />

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
