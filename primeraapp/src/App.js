import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import { Component } from 'react/cjs/react.development';

const App = (props) => {
  let misdatos = {
    nombre: "Dereck",
    apellido: "Cepeda",
    estudio: "DAM2"
  }
  return (
    <>
      <h1> Mis datos</h1>
      <h3>{JSON.stringify(misdatos)}</h3>
      <p>
        {props.num1+props.num2}
      </p>
    </>
  );
}

App.propTypes = {
  num1: PropTypes.number.isRequired,
  num2: PropTypes.number.isRequired
}


export default App;
