import "./Employee.css";

const Employee = (props) => {
  return (
    <div className="employee">
      <div
        className="header"
        style={{ backgroundColor: props.backgroundColor } }
      >
        <img src={props.imagem} alt={props.nome} />
      </div>
      <div className="bottom">
        <h4>{props.nome}</h4>
        <p>{props.cargo}</p>
      </div>
    </div>
  );
};

export default Employee;
