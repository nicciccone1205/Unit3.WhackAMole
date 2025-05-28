import { useGame } from "./GameContext";

export default function Welcome() {
  const { start, highScores } = useGame();
  return (
    <>
      <section className="welcome">
        <p>Wanna play a game?</p>
        <p>Whack a mole to earn points.</p>
        <p>See how many you can get in 15 seconds!</p>
        <button onClick={start}>Play</button>
      </section>
      <section className="highscores">
        <h2>High Scores</h2>
        <ul>
          {highScores.length > 0 ? (
            highScores.map((score, i) => <li key={i}>{score}</li>)
          ) : (
            <li>None yet... so play the game!</li>
          )}
        </ul>
      </section>
    </>
  );
}
