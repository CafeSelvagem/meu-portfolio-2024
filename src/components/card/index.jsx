import { SiCreatereactapp } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiNodedotjs, SiPython, SiRedux } from "react-icons/si";
import { StyledCard, StyledCardfooter } from "./card.module";
import { BsArrowRight } from "react-icons/bs";

function Card(){
    return(
        <StyledCard >
            <h3>Titulo do Projeto</h3>
            <p>Texto Descritivo do Projeto.</p>
            <StyledCardfooter>
                <div className="card_icones">
                    <SiCreatereactapp alt="React" className="icone" />
                    <SiPython alt="Python" className="icone" />
                    <SiNodedotjs alt="NodeJs" className="icone" />
                    <SiRedux alt="Redux" className="icone" />
                    <GrMysql alt="Mysql" className="icone" />
                </div>
                <button className="btn"><BsArrowRight/></button>
            </StyledCardfooter>
        </StyledCard>
    )
}

export default Card;    