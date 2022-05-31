import Home from "./components/Home/Home";
import { Container } from "@mui/system";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#603F8B",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container sx={{ py: 2 }}>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
