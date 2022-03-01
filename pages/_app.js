import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import NavBar from "../components/ui/NavBar";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#03be9f",
    },
    secondary: {
      main: "#18e0d0",
    },
    text: {
      primary: "#414141",
      secondary: "#666666",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
