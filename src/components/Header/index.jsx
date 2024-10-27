import { StylesHeader } from "./header.module.jsx";
import { Logoimg } from "./header.module.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StylesHeader>
      <Link to="/">
        <Logoimg src="./images/logo.png" alt="logo"/>
        {/* <span>😎 Paulo Miguel.dev</span> */}
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
    </StylesHeader>
  );
}

export default Header;
