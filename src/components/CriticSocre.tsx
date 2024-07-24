import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticSocre = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} colorScheme={color} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticSocre;
