import { StyledSection } from "../../App.module.jsx";
import { Apresentacao } from "../../App.module";
import { Btn } from "../../App.module";
import { ImgHome } from "../../App.module.jsx";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Header />
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
          <Btn>Saiba Mais Sobre Mim</Btn>
          </Link>
        </Apresentacao>
        <figure>
          <ImgHome
            src="/public/undraw_developer_activity_re_39tg.svg"
            alt="Image de Home"
          />
        </figure>
      </StyledSection>
      <Footer />
    </>
  );
}

export default Home;
