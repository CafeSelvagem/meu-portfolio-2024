import { StyledSection } from "./App.module.jsx";
import { Apresentacao } from "./App.module";
import { Btn } from "./App.module";
import { ImgHome } from "./App.module";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <StyledSection>
        <Apresentacao >
          <h2>
            Olá sou
            <br />
            <span>Paulo Miguel</span>
            <br />
            Dev Full Stack
          </h2>
          <Btn>Saiba Mais Sobre Mim</Btn>
        </Apresentacao>
        <figure>
          <ImgHome src="/public/undraw_developer_activity_re_39tg.svg" alt="Image de Home"/>
        </figure>
      </StyledSection>
      <Footer />
    </>
  );
}

export default App;
