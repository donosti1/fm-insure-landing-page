import React, {useEffect, useState} from "react";
import {Button, Container, Image, Stack} from "@chakra-ui/react";
import {min} from "lodash";

interface IMenu {
  id: number;
  label: string;
}
const Header = () => {
  const menuItems = [
    {id: 0, label: " How we work"},
    {id: 1, label: "Blog"},
    {id: 2, label: "Account"},
  ];

  return (
    <>
      <Container
        /* backgroundColor={scrollPosition > 64 ? "black" : "transparent"}
      paddingTop={[scrollPosition > 64 ? 0 : 6, 0]}
      position={["fixed", "relative"]}
      zIndex="100" */
        maxWidth={["container.sm", "container.xl"]}
      >
        <Stack
          alignItems="center"
          as="header"
          className="Header"
          direction="row"
          justifyContent="space-between"
        >
          <Image alt="logo" height={[6, 4]} src="/assets/logo.svg" width={[20, 20]} />
          <Stack direction="row" display={["none", "flex"]} spacing={[2, 6]}>
            {menuItems.map((mi) => (
              <Button key={mi.id} variant="header-link">
                {mi.label}
              </Button>
            ))}
            <Button variant="outline">View plans</Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
  /* const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menu = menuItems.map((mi) => (
    <Button key={mi.id} variant="header-link">
      {mi.label}
    </Button>
  ));

  return (
    <>
      <Container
        backgroundColor={scrollPosition > 64 ? "black" : "transparent"} 
        maxWidth={["container.sm", "container.xl"]}
        paddingTop={[scrollPosition > 64 ? 0 : 6, 0]}
        position={["fixed", "relative"]}
        zIndex="100"
      >
        <Stack
          alignItems="center"
          as="header"
          className="Header"
          direction="row"
          justifyContent="space-between"
        >
          <Image alt="logo" height={[6, 4]} src="/assets/logo.svg" width={[20, 20]} />
          <Stack direction="row" spacing={[2, 6]}>
            {menu}
          </Stack>
        </Stack>
      </Container>
    </>
  ); */
};

export default Header;
