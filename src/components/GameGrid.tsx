import React from "react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error, isLoading, setGames, setError } = useGames();
  return (
    <ul className="list-group">
      {games.length === 0 && <p>There are no games</p>}
      {games.map((game) => (
        <li key={game.id} className="list-group-item">
          {game.name}
        </li>
      ))}
    </ul>
  );
};

export default GameGrid;
