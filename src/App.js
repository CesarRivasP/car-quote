import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import { getYearDifference, calculateBrand, getPlan } from './helpers/helpers'
import './css/App.css';

class App extends Component {
  state = {
    result: '',
    data: {}
  }

  quoteSafe = (data) => {
    console.log(data);
    const { brand, age, plan } = data;

    // Agregar una base de 2000
    let result = 2000;
    // obtener la diferencia del seguro
    let difference = getYearDifference(age);
    // por cada año restar el 3% al valor del seguro
    result -= ((difference * 3) * result) / 100;
    // si es alfa aumentar 30%, bmw mercedes 20%, toyota lexus o porsche en 0
    result = calculateBrand(brand) * result;
    // el plan basico incrementa el valor 20% y el completo un 50%
    let incrementPlan = getPlan(plan);
    // dependiendo del plan increment
    result = parseFloat(incrementPlan * result).toFixed(2);
    // ya se tiene el costo
  }

  render(){
    return (
      <div className="App-header">
        <Header title="Cotizador de vehiculos"/>
        <div className="container-form">
          <Form quoteSafe={this.quoteSafe} />
        </div>
      </div>
    );
  }
}

export default App;
