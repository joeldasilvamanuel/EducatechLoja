import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Lojas from "./Pages/Lojas";
import Relatorios from "./Pages/Relatorios";
import Suporte from "./Pages/Suporte";
import Container from "./Layout/Container";
import Navbar from "./Layout/Navbar";
import "./App.css";

function AppWrapper() {

  const location = useLocation();

  const isHome = location.pathname === "/";
  const isRelatorios = location.pathname === "/Relatorios";

  const blueBackground = isHome || isRelatorios;

  return (
    <div className={blueBackground ? "blue-background" : ""}>

      <Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Lojas" element={<Lojas />} />
          <Route path="/Relatorios" element={<Relatorios />} />
          <Route path="/Suporte" element={<Suporte />} />
        </Routes>
      </Container>

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;