import React from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading, setGames, setError } = useGames();
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={10}
      className="list-group"
    >
      {games.length === 0 && <p>There are no games</p>}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
