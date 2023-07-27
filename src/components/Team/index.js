import Employee from "../Employee";
import "./Team.css";

const Team = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className="employees">
          {props.colaboradores.map((colaborador) => (
            <Employee
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              backgroundColor={props.primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
