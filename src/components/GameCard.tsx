import React from "react";
import { Game } from "../services/game-service";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticSocre from "./CriticSocre";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" width="300px">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms}
          ></PlatformIconList>
          <CriticSocre score={game.metacritic}></CriticSocre>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
