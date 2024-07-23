import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-controller-orange-no-bg.png";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <Text>
        <ColorModeSwitch></ColorModeSwitch>
      </Text>
    </HStack>
  );
};

export default Navbar;
