import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "primary.500",
      },
    },
  },
  colors: {
    primary: {
      400: "hsl(216, 30%, 68%)",
      500: "hsl(256, 26%, 20%)",
    },
    secondary: {
      100: "hsl(0, 0%, 98%)",
      500: "hsl(273, 4%, 51%)",
      900: "hsl(270, 9%, 17%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1120px",
    },
  },
  fonts: {
    body: "DM Serif Display",
    heading: "Karla",
  },
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            bg: "white",
            color: "black",
            borderRadius: "full",
            fontSize: ["xs", "inherit"],
            _focus: {
              bg: "white",
            },
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "Karla",
        height: 12,
        textTransform: "uppercase",
      },
      variants: {
        "outline-darkBg": {
          color: "white",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 0,
          px: 6,
          /* h: 8,
          letterSpacing: "1.2px", */
          _hover: {
            color: "primary.500",
            bg: "white",
          },
        },
        "footer-link": {
          color: "secondary.900",
          fontWeight: "700",
          h: 8,
          letterSpacing: "1.2px",
          _hover: {
            textDecoration: "underline",
          },
        },
        "header-link": {
          bg: "transparent",
          color: "secondary.500",
          fontFamily: "Karla",
          fontSize: ["sm", "lg"],
          paddingInlineStart: [0, "inherit"],
          paddingInlineEnd: [0, "inherit"],
          _hover: {
            bg: "white",
            color: "primary.500",
          },
        },
        "header-menu-button": {
          borderColor: "primary.500",
          borderWidth: 2,
          borderRadius: 0,
          paddingInlineStart: [0, "inherit"],
          paddingInlineEnd: [0, "inherit"],
          display: "flex",
        },
        "mobile-menu-link": {
          bg: "transparent",
          color: "white",
          fontFamily: "Karla",
          fontSize: ["lg", "lg"],
          h: 16,
          paddingInlineStart: [0, "inherit"],
          paddingInlineEnd: [0, "inherit"],
        },
        solid: {
          bg: "primary.400",
          color: "white",
          fontFamily: "Raleway",
          fontSize: "sm",
          fontWeight: "700",
          w: "auto",
          px: [12],
          _hover: {
            bg: "primary.300",
            color: "white",
          },
        },
        outline: {
          borderColor: "primary.500",
          borderWidth: 2,
          borderRadius: 0,
          px: 8,
          _hover: {
            bg: "primary.500",
            color: "white",
          },
        },
      },
      sizes: {
        lg: {
          h: 14,
          minW: 12,
          fontSize: "lg",
          px: 10,
        },
      },
    },
    Drawer: {
      baseStyle: {
        dialog: {
          bg: "secondary.900",
          maxHeight: "90vh",
        },
      },
    },
  },
});
