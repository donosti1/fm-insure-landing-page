import React from "react";
import {Container, Image, Stack, SimpleGrid, Text, Button, StackDivider} from "@chakra-ui/react";

import FeaturesCard from "./components/FeaturesCard";

const featuresItems = [
  {
    id: 0,
    picture: "icon-snappy-process.svg",
    title: "Snappy Process",
    feature:
      "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
  },
  {
    id: 1,
    picture: "icon-affordable-prices.svg",
    title: "Affordable Prices",
    feature:
      "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    id: 2,
    picture: "icon-people-first.svg",
    title: "People First",
    feature:
      "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.",
  },
];

const features = featuresItems.map((fe) => <FeaturesCard key={fe.id} {...fe} />);
const Features = () => {
  return (
    <>
      <Stack
        background={[
          "linear-gradient(0deg, white 58%, var(--chakra-colors-primary-500) 58%)",
          "linear-gradient(0deg, white 55%, var(--chakra-colors-primary-500) 55%)",
        ]}
        width="100%"
      >
        <Stack
          alignSelf="center"
          className="Features"
          maxWidth="container.xl"
          paddingX={[0, 1]}
          paddingY={[0, 24]}
          role="main"
        >
          <SimpleGrid columns={[1, 2]} gap={4}>
            <Stack alignItems={["center", "flex-start"]} order={[1, "inherit"]} paddingX={[4, 0]}>
              <StackDivider
                borderColor="secondary.100"
                borderWidth={1}
                display={["none", "block"]}
                role="separator"
                width={32}
              />
              <Text
                color="secondary.100"
                fontSize={[40, "6xl"]}
                lineHeight={["1.2", "1"]}
                paddingBottom={[4, 4]}
                paddingTop={[16, 16]}
                textAlign={["center", "left"]}
              >
                Humanizing your insurance.
              </Text>
              <Text
                color="secondary.100"
                fontFamily="Karla"
                fontSize={["sm", "inherit"]}
                textAlign={["center", "inherit"]}
              >
                Get your life insurance coverage easier and faster. We blend our expertise and
                technology to help you find the plan that’s right for you. Ensure you and your loved
                ones are protected.
              </Text>
              <Stack paddingBottom={[48, 96]} paddingTop={[8, 8]}>
                <Button variant="outline-darkBg" zIndex="1">
                  View plans
                </Button>
              </Stack>
            </Stack>
            <Stack
              backgroundImage={[
                "url('/assets/image-intro-mobile.jpg')",
                "url('/assets/image-intro-desktop.jpg')",
              ]}
              backgroundRepeat="no-repeat"
              backgroundSize={["cover", "contain"]}
              height={["sm", "auto"]}
            />
          </SimpleGrid>
          <StackDivider
            alignSelf={["center", "flex-start"]}
            borderColor="primary.500"
            borderWidth={1}
            role="separator"
            width={[36, 32]}
          />
          <Text
            color="secondary.900"
            fontSize={["2.5rem", "6xl"]}
            lineHeight={["1.2", "1"]}
            paddingBottom={[16, 16]}
            paddingTop={[8, 16]}
            textAlign={["center", "left"]}
          >
            We’re different
          </Text>
          <SimpleGrid columns={[1, 3]} gap={[16, 8]} paddingBottom={[32, 0]}>
            {features}
          </SimpleGrid>
        </Stack>

        <Stack
          backgroundImage={[
            "url('/assets/bg-pattern-intro-right-mobile.svg')",
            "url('/assets/bg-pattern-intro-right-desktop.svg')",
          ]}
          backgroundPosition={["100% 24%", "106% -97%"]}
          backgroundRepeat="no-repeat"
          backgroundSize={["35%", "32%"]}
          height={["100%", "100vh"]}
          marginTop="0!important"
          position="absolute"
          width="100%"
        />
        <Stack
          backgroundImage={[
            "url('/assets/bg-pattern-intro-left-mobile.svg')",
            "url('/assets/bg-pattern-intro-left-desktop.svg')",
          ]}
          backgroundPosition={["0% 56%", "0% 80%"]}
          backgroundRepeat="no-repeat"
          backgroundSize={["50%", "12%"]}
          height="150vh"
          marginTop="0!important"
          position="absolute"
          width="100%"
        />
      </Stack>
    </>
  );
};

export default Features;
