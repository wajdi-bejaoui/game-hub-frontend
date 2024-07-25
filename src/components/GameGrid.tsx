import useGames from "../hooks/useGames";
import { Text, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatform";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  searchText: string;
}

const GameGrid = ({ selectedGenre, selectedPlatform, searchText }: Props) => {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    searchText
  );
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
      className="list-group"
    >
      {/* {games.length === 0 && <p>There are no games</p>} */}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}

      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
