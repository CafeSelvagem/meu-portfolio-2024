import { StylesHeader } from "./header.module.jsx";
import { Logoimg } from "./header.module.jsx";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png"


function Header() {
  return (
    <StylesHeader>
      <Link to="/">
        <Logoimg src={Logo} alt="logo" className="logo"/>
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
