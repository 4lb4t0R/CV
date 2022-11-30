import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPrincipal from "./MainMenu";
import Diplomes from "./Diplomes";
import Contact from "./Contact";
import Competences from "./Competences";
import CentreInterets from "./CentreInterets";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/Diplômes" element={<Diplomes />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Compétences" element={<Competences />} />
        <Route path="/Centres d'intérêts" element={<CentreInterets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
