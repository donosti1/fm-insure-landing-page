import React, {FunctionComponent, useState} from "react";
import {Button, Container, Image, SimpleGrid, Stack, Text, Icon} from "@chakra-ui/react";

import IconArrow from "./components/IconArrow";
interface BannerProps {}

const Banner: FunctionComponent<BannerProps> = () => {
  const [hover, setHover] = useState(false);

  return (
    <Stack width="100%">
      <Container
        backgroundColor="primary.500"
        backgroundImage={[
          "url('/assets/bg-pattern-how-we-work-mobile.svg')",
          "url('/assets/bg-pattern-how-we-work-desktop.svg')",
        ]}
        backgroundPosition="top right"
        backgroundRepeat="no-repeat"
        className="Banner"
        maxWidth="container.xl"
        paddingX={[8, 16]}
        paddingY={16}
        role="banner"
      >
        <Stack
          alignItems="center"
          direction={["column", "row"]}
          justifyContent="space-between"
          spacing={[8, 8]}
        >
          <Text
            color="secondary.100"
            fontSize={["3xl", "6xl"]}
            lineHeight={["1.2", "1"]}
            textAlign={["center", "left"]}
            width={["100%", "54%"]}
          >
            Find out more about how we work
          </Text>
          <Button variant="outline-darkBg">How we work</Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Banner;
