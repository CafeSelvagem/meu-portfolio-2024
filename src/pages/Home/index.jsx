import { StyledSection } from "./home.module.jsx";
import { Apresentacao } from "./home.module.jsx";
import { ImgHome } from "./home.module.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <StyledSection>
      <Apresentacao>
        <h2>
          Olá sou
          <br />
          <span>Paulo Miguel</span>
          <br />
          Dev Full Stack
        </h2>
        <Link to="/sobre">
          <button>Saiba Mais Sobre Mim</button>
        </Link>
      </Apresentacao>
      <figure>
        <ImgHome
          src="../../../public/undraw_developer_activity_re_39tg.svg"
          alt="Image de Home"
        />
      </figure>
    </StyledSection>
  );
}

export default Home;
