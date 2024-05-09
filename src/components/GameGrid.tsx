import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 5, xl: 4 }}
        padding="5px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
          <GameCard  game={game} />
          </GameCardContainer>
))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
