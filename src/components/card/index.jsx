import { SiCreatereactapp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNodedotjs, SiPython, SiRedux } from "react-icons/si";
import { StyledCard, StyledCardfooter } from "./card.module";
import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function Card({ nome, description, html_url }) {
  return (
    <StyledCard>
      <h3>{nome}</h3>
      <p>{description}</p>
      <StyledCardfooter>
        <div className="card_icones">
          <SiCreatereactapp alt="React" className="icone" />
          <SiPython alt="Python" className="icone" />
          <SiNodedotjs alt="NodeJs" className="icone" />
          <SiRedux alt="Redux" className="icone" />
          <GrMysql alt="Mysql" className="icone" />
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="nopenner norefferer"
          className="btn"
        >
          <BsArrowRight />
        </a>
      </StyledCardfooter>
    </StyledCard>
  );
}

export default Card;
