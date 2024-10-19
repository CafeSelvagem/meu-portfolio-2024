import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contatos from "./pages/Contatos";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/404";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
