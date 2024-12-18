import { useEffect, useState } from "react";
import Card from "../../components/card";
import { Projeto } from "./projeto.module";

function Projetos() {
  //TODO: Lendo a Api do gitHub
  const [repositorio, setRepositorio] = useState([]);

  useEffect(() => {
    const buscarRepositorio = async () => {
      const response = await fetch(
        "https://api.github.com/users/CafeSelvagem/repos?page=1&per_page=50"
      );
      const data = await response.json();
      setRepositorio(data);
    };
    buscarRepositorio();
  }, []);

  return (
    <Projeto>
      <div className="corpo">
        <h2>Projetos</h2>
        {repositorio.length > 0 ? (
          <div className="list">
            {repositorio.map((repo) => (
              <Card
                key={repo.id}
                nome={repo.nome}
                description={repo.descicao}
                html_url={repo.html_url}
              />
            ))}
          </div>
        ) : (
          <p>Carregando Repositorio...</p>
        )}
      </div>
    </Projeto>
  );
}

export default Projetos;
