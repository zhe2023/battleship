import './Score.css';

interface ScoreProps {
  score: number;
  player: string;
}

export const Score: React.FC<ScoreProps> = ({ score, player }) => {
  return (
    <div className="score__container">
      <div className="score__number">{score < 10 ? `0${score}` : score}</div>
      <div className="score__player">{player}</div>
    </div>
  );
};
