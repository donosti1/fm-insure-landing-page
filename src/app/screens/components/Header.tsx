import React, {useEffect, useState} from "react";
import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Icon,
  Image,
  Stack,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

interface IMenu {
  id: number;
  label: string;
}
const menuItems = [
  {id: 0, label: " How we work"},
  {id: 1, label: "Blog"},
  {id: 2, label: "Account"},
];
const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Container
        /* backgroundColor={scrollPosition > 64 ? "black" : "transparent"}
      paddingTop={[scrollPosition > 64 ? 0 : 6, 0]}*/
        backgroundColor="white"
        display={["flex", "block"]}
        height="10vh"
        maxWidth={["container.sm", "container.xl"]}
        position={["fixed", "relative"]}
        zIndex="100"
      >
        <Stack
          alignItems="center"
          as="header"
          className="Header"
          direction="row"
          justifyContent="space-between"
          width="100%"
          zIndex="5"
        >
          <Image alt="logo" height={[5, 4]} src="/assets/logo.svg" width={[28, 20]} />
          <Stack direction="row" display={["none", "flex"]} spacing={[2, 6]}>
            {menuItems.map((mi) => (
              <Button key={mi.id} variant="header-link">
                {mi.label}
              </Button>
            ))}
            <Button variant="outline">View plans</Button>
          </Stack>
          <Button
            ref={btnRef}
            display={["flex", "none"]}
            variant="header-menu-button"
            onClick={isOpen ? onClose : onOpen}
          >
            <Icon as={isOpen ? AiOutlineClose : AiOutlineMenu} h={6} w={6} />
          </Button>
          <Drawer
            finalFocusRef={btnRef}
            isOpen={isOpen}
            placement="left"
            size="full"
            onClose={onClose}
          >
            <DrawerContent top="10vh">
              <DrawerBody
                backgroundImage="url('assets/bg-pattern-mobile-nav.svg')"
                backgroundPosition="center bottom"
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                display="flex"
                justifyContent="center"
                top="10vh"
              >
                <Stack flex="1">
                  {menuItems.map((mi) => (
                    <Button key={mi.id} variant="mobile-menu-link">
                      {mi.label}
                    </Button>
                  ))}
                  <Button h={12} variant="outline-darkBg" width="100%" zIndex="1">
                    View plans
                  </Button>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
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
