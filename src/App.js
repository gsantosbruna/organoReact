import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Team from "./components/Team";
import Rodape from "./components/Rodape";

function App() {
  const teams = [
    { nome: "Programação", primaryColor: "#57c278", secondaryColor: "#d9f7e9" },
    { nome: "Front-End", primaryColor: "#82cffa", secondaryColor: "#e8f8ff" },
    {
      nome: "Data Science",
      primaryColor: "#a6d157",
      secondaryColor: "#f0f8e2",
    },
    { nome: "Devops", primaryColor: "#e06b69", secondaryColor: "#fde7e8" },
    {
      nome: "UX and Design",
      primaryColor: "#db6ebf",
      secondaryColor: "#f1e9f5",
    },
    { nome: "Mobile", primaryColor: "#ffba05", secondaryColor: "#fff5d9" },
    {
      nome: "Inovação e Gestão",
      primaryColor: "#ff8a29",
      secondaryColor: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        teams={teams.map((team) => team.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      {teams.map((team) => (
        <Team
          key={team.nome}
          name={team.nome}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === team.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
