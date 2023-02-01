import React from 'react';
import classNames from 'classnames';

import './Board.css';

const BOARD_SIZE = [10, 10];

interface BoardProps {
  // TODO remove className
  className?: string;
  onHit?: (x: number, y: number) => void;
}

export const Board: React.FC<BoardProps> = React.memo(
  ({ className, onHit }) => {
    return (
      <div
        className={classNames(className, 'board__container')}
        data-testid="board__container"
      >
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
  }
);
