import React from 'react';
import Header from './components/header';
import Form from './components/form';
import './css/App.css';

function App() {
  return (
    <div className="App-header">
      <Header title="Cotizador de vehiculos"/>
      <div className="container-form">
        <Form />
      </div>
    </div>
  );
}

export default App;
