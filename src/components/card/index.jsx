import { SiCreatereactapp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNodedotjs, SiPython, SiRedux } from "react-icons/si";
import { StyledCard, StyledCardfooter } from "./card.module";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Card({ nome, descicao, html_url }) {
  return (
    <StyledCard>
      <h3>{nome}</h3>
      <p>{descicao}</p>
      <StyledCardfooter>
        <div className="card_icones">
          <SiCreatereactapp alt="React" className="icone" />
          <SiPython alt="Python" className="icone" />
          <SiNodedotjs alt="NodeJs" className="icone" />
          <SiRedux alt="Redux" className="icone" />
          <GrMysql alt="Mysql" className="icone" />
        </div>
        <Link to={html_url} className="btn">
          <BsArrowRight />
        </Link>
      </StyledCardfooter>
    </StyledCard>
  );
}

export default Card;
