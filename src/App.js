import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import './css/App.css';

class App extends Component {

  quoteSafe = (data) => {
    console.log(data);
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
