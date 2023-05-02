import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

const Input = (props) => {

  const { id, placeholder, name, label, type = "text" } = { ...props };
  return (
    <div className="col-lg-5" key={id}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        required
      />
      <div className="valid-feedback">¡correcto! 😻</div>
      <div className="invalid-feedback">Debe ingresar el campo 😻</div>
    </div>
  );
};


function App() {
  let links = ["facebook", "whatsapp", "Instagram", "Twitter", "TikTok"];
  const [inputValue, setInputValue] = useState({correocarinosa:"", correoartistico:"", Numerocedula:"", estadocivil:"", parejas:"", discapacidad:"", edad:"", nivelacademico:"", direccion:"", habilidades:"",capacidad:"", correo:"", orientacionsexual:"", salario:"", hijos:"", fecha:""});

  let inputsProps = [];

  inputsProps.push({
    id: "correocarinosa",
    placeholder: "Ingrese su correo",
    name: "correocarinosa",
    label: "Cual es su correo:",
    value: inputValue.correocarinosa
  });
  inputsProps.push({
    id: "correoartistico",
    placeholder: "Cual es su correo artistico",
    name: "correoartistico",
    label: "Ingrese su apodo:",
    value: inputValue.correoartistico
  });
  inputsProps.push({
    id: "Numerocedula",
    placeholder: "Ingrese Numero de cedula",
    name: "Numerocedula",
    label: " Numero de cedula:",
    value: inputValue.Numerocedula
  });
  inputsProps.push({
    id: "discapacidad",
    placeholder: "Discapacidad",
    name: "discapacidad",
    label: "Discapacidad:",
    value: inputValue.discapacidad
  });
  inputsProps.push({
    id: "parejas",
    placeholder: "parejass",
    name: "parejas",
    label: "parejas:",
    value: inputValue.parejas
  });
  inputsProps.push({
    id: "estadocivil",
    placeholder: "Ingrese el estado civil",
    name: "estadocivil",
    label: "correo del estado civil:",
    value: inputValue.estadocivil
  });
  inputsProps.push({
    id: "habilidades",
    placeholder: "Cuales son sushabilidades",
    name: "habilidades",
    label: "correo de las habilidades:",
    value: inputValue.habilidades
  });
  inputsProps.push({
    id: "Edad",
    placeholder: "Ingrese su Edad",
    name: "Edad",
    label: "Edad:",
    value: inputValue.Edad
  });
  inputsProps.push({
    id: "direccion",
    placeholder: "Ingrese su Direccion",
    name: "Direccion",
    label: "cual es su Direccion:",
    value: inputValue.direccion
  });
  inputsProps.push({
    id: "nivelacademico",
    placeholder: "Cual es su nivel academico",
    name: "Nivelacademico",
    label: "Nivel Academico:",
    value: inputValue.nivelacademico
  });
  inputsProps.push({
    id: "habilidades",
    placeholder: "cuales son sus habilidades",
    name: "habilidades",
    label: "habilidades:",
    value: inputValue.habilidades
  });
  inputsProps.push({
    id: "capacidad",
    placeholder: "Ingrese la capacidad en cm",
    name: "capacidad",
    label: "capacidad:",
    value: inputValue.capacidad
  });
  inputsProps.push({
    id: "correo",
    placeholder: "Ingrese el correo",
    name: "correo",
    label: "correo:",
    value: inputValue.correo
  });
  inputsProps.push({
    id: "orientacionsexual",
    placeholder: "Ingrese orientacionsexual",
    name: "orientacionsexual",
    label: "orientacionsexual:",
    value: inputValue.orientacionsexual
  });
  inputsProps.push({
    id: "hijos",
    placeholder: "Ingrese el Numero de hijos",
    name: "hijos",
    label: "Numero de hijos:",
    value: inputValue.hijos
  });

  return (
  <></>
  );
}

export default App;
