import React from "react";
import {Button, Image, Stack, Text} from "@chakra-ui/react";

import DesktopHeader from "./components/Header";
const Header = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="secondary.400"
      backgroundImage={[
        "url('/assets/bg-curvy-mobile.svg')",
        "url('/assets/bg-curvy-desktop.svg')",
      ]}
      backgroundPosition={["center 65%", "center bottom"]}
      backgroundRepeat="no-repeat"
      backgroundSize={["contain", "contain"]}
      paddingY={[4, 6]}
      spacing={0}
      width="100%"
    >
      <DesktopHeader />
    </Stack>
  );
};

export default Header;
