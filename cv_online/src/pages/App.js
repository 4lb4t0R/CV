import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPrincipal from "./MainMenu";
import Diplomes from "./Diplomes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
        <Route path="/diplômes" element={<Diplomes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
