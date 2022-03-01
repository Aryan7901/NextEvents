import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import NavBar from "../components/ui/NavBar";
import Head from "next/head";

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
      <Head>
        <title>Next Events</title>
        <meta name="description" content="Next Events" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
