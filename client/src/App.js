import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{ marginTop: "54px" }}>
        <Home />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
