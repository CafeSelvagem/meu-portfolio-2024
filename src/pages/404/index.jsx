import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Styled_Page404 } from "./404.module";

function Page404() {
  return (
    <>
      <Header />
      <Container>
        <Styled_Page404>
          <h1>Algo de errado não esta certo!</h1>
          <div>
            <span>404</span>
            <br />
            <h2>Página não encontrada!</h2>
          </div>
        </Styled_Page404>
      </Container>
      <Footer />
    </>
  );
}

export default Page404;
