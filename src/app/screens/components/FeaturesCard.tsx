import React from "react";
import {Image, Stack, Text} from "@chakra-ui/react";
interface Feature {
  id: number;
  picture: string;
  title: string;
  feature: string;
}
const FeaturesCard = (props: Feature) => {
  const imageSrc = `/assets/${props.picture}`;

  return (
    <>
      <Stack
        alignItems={["center", "flex-start"]}
        className="FeaturesCard"
        paddingX={[4, 0]}
        spacing={[4, 2]}
      >
        <Image alt={props.title} src={imageSrc} />
        <Text as="h2" fontSize={["xl", "xl"]} fontWeight="700" paddingTop={[4, 6]}>
          {props.title}
        </Text>
        <Text color="secondary.500" fontFamily="Karla" fontSize="sm" letterSpacing=".7px">
          {props.feature}
        </Text>
      </Stack>
    </>
  );
};

export default FeaturesCard;
