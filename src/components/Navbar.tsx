import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/game-controller-orange-no-bg.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <HStack>
        <Image src={logo} boxSize="60px"></Image>
        {/* <Text>NavBar</Text> */}
      </HStack>

      <SearchInput onSearch={onSearch}></SearchInput>

      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default Navbar;
