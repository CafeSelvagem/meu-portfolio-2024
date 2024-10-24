import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { StyledSobre } from "./sobre.module";
import Avatar from "./images/avatar.png";
function Sobre() {
  return (
    <StyledSobre>
      <div className="bio">
        <img src={Avatar} alt="Avatar" className="avatar" />
        <div className="texto">
          <h2>Sobre</h2>
          <p>Sou <span>Paulo Miguel</span>, tenho 24 anos 👋</p>
          <p><strong>Desenvolvedor Full-Stack</strong></p>
          <p>
          Atuando na agência de inovação <strong>AGO7.</strong> Tenho experiência em diversas tecnologias, incluindo JavaScript, React, Node.js, MySQL, Python, e Redux .Recentemente, tem focado no aprimoramento as minhas habilidades em automação de processos com Python, consolidando minha experiencia em soluções inovadoras para resolução de problemas.
          </p>
          <br />
          <p>
            Estou sempre em busca de novas oportunidades de aprendizado e
            crescimento, especialmente na área de automação com Python, visando
            a criação de fluxos de trabalho mais eficientes e integrados. Meu
            objetivo é me tornar referência no desenvolvimento e automação de
            processos, oferecendo soluções que maximizem o impacto das empresas
            para as quais trabalho.
          </p>
        </div>
      </div>

      <div className="techs">
        <h3>Tecnologias</h3>
        <div className="cardicones">
          <FaReact alt="React" className="icone" />
          <FaNodeJs alt="NodeJs" className="icone" />
          <SiMysql alt="Mysql " className="icone" />
          <SiRedux alt="Redux" className="icone" />
          <FaPython alt="Python" className="icone" />
        </div>
      </div>
    </StyledSobre>
  );
}

export default Sobre;
