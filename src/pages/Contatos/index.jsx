import { StyledContato } from "./contatos.module";
import { StyledIcons } from "./contatos.module";
import { CiMail } from "react-icons/ci";
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

function Cotatos() {
  return (
        <StyledContato>
          <h2>Meus Contatos</h2>
          <StyledIcons>
            <a href="mailto:paulo.miguel.v2000@gmail.com" target="_blank" rel='noopener noreferrer'><CiMail className="icone"/></a>
            <a href="https://web.Whatsapp.com/send?phone=5511958424-0143" target="_blank" rel='noopener noreferrer'><BsWhatsapp className="icone"/></a>
            <a href="https://github.com/CafeSelvagem" target="_blank" rel='noopener noreferrer'><BsGithub className="icone"/></a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel='noopener noreferrer'><BsLinkedin className="icone"/></a>
            <a href="https://www.instagram.com/phallu73/" target="_blank" rel='noopener noreferrer'><BsInstagram className="icone"/></a>
          </StyledIcons>
        </StyledContato>
  );
}

export default Cotatos;
