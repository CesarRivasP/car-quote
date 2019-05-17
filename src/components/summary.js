import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import { firstMayus } from '../helpers/helpers';


class Summary extends Component {
  render(){
    const { brand, age, plan} = this.props.data;
    return (
      <div className="summary">
        <Divider variant="middle" style={{ marginBottom: 20, height: 2}}/>
        <h2>Resumen de cotización</h2>
        <li>Marca: <strong>{ firstMayus(brand) }</strong></li>
        <li>Plan: <strong>{ firstMayus(plan) }</strong></li>
        <li>Año del auto: <strong>{ firstMayus(age) }</strong></li>
      </div>
    )
  }
}

export default Summary;
