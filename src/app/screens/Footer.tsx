import React from "react";
import {
  Button,
  Container,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import {FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";

interface menuComponents {
  menuLabel: string;
  menuItems: {id: number; label: string}[];
}
const companyMenuItems = [
  {id: 0, label: "How we work"},
  {id: 1, label: "Why Insure?"},
  {id: 2, label: "View plans"},
  {id: 3, label: "Reviews"},
];
const helpMeMenuItems = [
  {id: 0, label: "FAQ"},
  {id: 1, label: "Terms of use"},
  {id: 2, label: "Privacy policy"},
  {id: 3, label: "Cookies"},
];
const contactMenuItems = [
  {id: 0, label: "Sales"},
  {id: 1, label: "Support"},
  {id: 2, label: "Live chat"},
];
const othersMenuItems = [
  {id: 0, label: "Careers"},
  {id: 1, label: "Press"},
  {id: 2, label: "Licenses"},
];

const CustomMenuItem = (props: menuComponents) => {
  const MenuItemsList = props.menuItems.map((mi) => (
    <Button key={mi.id} fontSize="sm" variant="footer-link">
      {mi.label}
    </Button>
  ));

  return (
    <Stack alignItems={["center", "flex-start"]} spacing={[4, 2]}>
      <Button color="secondary.500" variant="footer-link">
        {props.menuLabel}
      </Button>
      <Stack alignItems={["center", "flex-start"]} spacing={[0, 0]}>
        {MenuItemsList}
      </Stack>
    </Stack>
  );
};
const SocialNetworks = () => {
  const item = [
    {id: 0, icon: FaFacebookSquare},
    {id: 1, icon: FaTwitter},
    {id: 2, icon: FaPinterest},
    {id: 3, icon: FaInstagram},
  ];
  const icons = item.map((it) => (
    <Icon
      key={it.id}
      _hover={{
        color: "secondary.900",
        cursor: "pointer",
      }}
      as={it.icon}
      color="secondary.500"
      height={6}
      width={6}
    />
  ));

  return <>{icons}</>;
};

const Footer = () => {
  return (
    <Stack
      alignItems={["center", "flex-start"]}
      backgroundColor="secondary.100"
      backgroundImage={[
        "url('/assets/bg-pattern-footer-mobile.svg')",
        "url('/assets/bg-pattern-footer-desktop.svg')",
      ]}
      backgroundRepeat="no-repeat"
      paddingY={[16, 16]}
      role="contentinfo"
      width="100%"
    >
      <Container maxWidth="container.xl">
        <Stack divider={<StackDivider borderColor="primary.400" role="separator" />} spacing={8}>
          <Stack
            alignItems="center"
            direction={["column", "row"]}
            justifyContent="space-between"
            spacing={[8, 0]}
          >
            <Image alt="logo" height={[6, 6]} src="assets/logo.svg" width={[32, 32]} />
            <Stack direction="row" justifyContent={["center", "inherit"]} spacing={4}>
              <SocialNetworks />
            </Stack>
          </Stack>
          <SimpleGrid columns={[1, 4]} spacingY={[6, 0]}>
            <CustomMenuItem menuItems={companyMenuItems} menuLabel="Our Company" />
            <CustomMenuItem menuItems={helpMeMenuItems} menuLabel="Help me" />
            <CustomMenuItem menuItems={contactMenuItems} menuLabel="Contact" />
            <CustomMenuItem menuItems={othersMenuItems} menuLabel="Others" />
          </SimpleGrid>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
