import Home from "./components/Home/Home";
import { Container } from "@mui/system";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ py: 2 }}>
        <Home />
      </Container>
    </>
  );
}

export default App;
