import React from "react";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticSocre from "./CriticSocre";
import { Game } from "../hooks/useGames";
import placeholder from "../assets/no-image-placeholder.jpg";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const image = game.background_image ? game.background_image : placeholder;
  return (
    <Card>
      <Image src={image}></Image>
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
