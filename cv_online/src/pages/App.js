import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPrincipal from "./MainMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuPrincipal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
