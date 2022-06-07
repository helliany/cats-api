import Home from "./components/Home/Home";
import { Container } from "@mui/system";
import Header from "./components/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteCats from "./components/FavoriteCats/FavoriteCats";

const theme = createTheme({
  palette: {
    primary: {
      main: "#603F8B",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Container sx={{ py: 2 }}>
          <Routes>
            <Route path="/favorite" element={<FavoriteCats />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
