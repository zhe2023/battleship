import React from 'react';

import './Board.css';

const BOARD_SIZE = [10, 10];

interface BoardProps {
  onHit?: (x: number, y: number) => void;
}

export const Board: React.FC<BoardProps> = React.memo(({ onHit }) => {
  return (
    <div className="board__container" data-testid="board__container">
      {[...new Array(BOARD_SIZE[0])].map((_, y) =>
        [...new Array(BOARD_SIZE[1])].map((_, x) => (
          <span
            key={`${x}-${y}`}
            data-testid={`board__cell-${x}-${y}`}
            onClick={() => onHit?.(x, y)}
          ></span>
        ))
      )}
    </div>
  );
});
