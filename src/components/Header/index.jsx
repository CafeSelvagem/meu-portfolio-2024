import { StylesHeader } from "./header.module.jsx";

function Header() {
  return (
    <StylesHeader>
      <span>pauloMiguel.dev</span>
      <nav>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#">Contatos</a>
      </nav>
    </StylesHeader>
  );
}

export default Header;
