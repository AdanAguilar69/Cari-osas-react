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
  const [inputValue, setInputValue] = useState({nombrecarinosa:"", nombreartistico:"", Numerocedula:"", discapacidad:"", parejas:"", discapacidad:"", edad:"", nivelacademico:"", direccion:"", habilidades:"",capacidad:"", correo:"", orientacionsexual:"", salario:"", hijos:"", fecha:""});

  let inputsProps = [];

  inputsProps.push({
    id: "nombrecarinosa",
    placeholder: "Ingrese su nombre",
    name: "nombrecarinosa",
    label: "Cual es su nombre:",
    value: inputValue.nombrecarinosa
  });
  inputsProps.push({
    id: "nombreartistico",
    placeholder: "Cual es su nombre artistico",
    name: "nombreartistico",
    label: "Ingrese su apodo:",
    value: inputValue.nombreartistico
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
    id: "Proveedor",
    placeholder: "Ingrese el proveedor",
    name: "Proveedor",
    label: "Nombre del proveedor:",
    value: inputValue.Proveedor
  });
  inputsProps.push({
    id: "Cliente",
    placeholder: "Ingrese el cliente",
    name: "cliente",
    label: "Nombre del cliente:",
    value: inputValue.Cliente
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
    label: "Ncual es su Direccion:",
    value: inputValue.direccion
  });
  inputsProps.push({
    id: "nivelacademico",
    placeholder: "Cual es su nivel academico",
    name: "Nivelacademico",
    label: "Nivel Academico:",
    value: inputValue.nivelacademico
  });


  return (
  <></>
  );
}

export default App;
