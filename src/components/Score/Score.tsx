import './Score.css';

interface ScoreProps {
  score: number;
  player: string;
  win?: boolean;
}

export const Score: React.FC<ScoreProps> = ({ score, player, win }) => {
  return (
    <div className="score__container">
      <div className="score__number">{score < 10 ? `0${score}` : score}</div>
      <div className="score__player">{win ? 'WIN' : player}</div>
    </div>
  );
};
