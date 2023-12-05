import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "2em",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          body: {
            margin: "0px",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#757575",
    },
    background: {
      default: "#F5F5F5",
      paper: "#ffffff",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    error: {
      main: "#ff3d00",
    },
  },
});

export default theme;
