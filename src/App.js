import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
