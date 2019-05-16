import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


const cars = [
  "Alfa Romeo",
  "BMW",
  "Porsche",
  "Subaru",
  "Toyota",
];

const styles = theme => ({
  formControlSelect1: {
    marginTop: 10,
    display: 'flex',
    margin: 'auto',
    maxWidth: 200,
    // justifyContent: 'center'
  },
  formControlSelect2: {
    marginTop: 25,
    display: 'flex',
    margin: 'auto',
    maxWidth: 200,
    // justifyContent: 'center'
  },
  formControl2: {
    marginTop: 40,
    display: 'flex',
    margin: 'auto',
    maxWidth: 120,
  },
  group: {
    display: 'flex',
    margin: 'auto'
  },
  button: {
    marginTop: 25,
    display: 'flex',
    margin: 'auto'
  }
});

class Form extends Component {
  state = {
    brand: ''
  }

  handleChange = (name) => (event) => {
    console.log(event.target.value);
    console.log(name);
    this.setState({ [name]: event.target.value });
  };

  render(){
    const { classes } = this.props;
    const currentYear = new Date().getFullYear();
    const items = [];
    for(let i = 1994; i <= currentYear; i++){
      items.push(<option key={i} value={i}>{i}</option>);
    }

    return (
      <div className="cotizar-auto">
        <h4 className="title-header">Ingrese los datos su vehiculo</h4>
        <div style={{ margin: '30px'}}>
          <div>
            <FormControl className={classes.formControlSelect1}>
              <InputLabel htmlFor="brand-native-simple">Marca</InputLabel>
              <Select
                native
                value={this.state.brand}
                onChange={this.handleChange('brand')}
                inputProps={{ name: 'brand', id: 'brand-native-simple'}}>
                <option value=""></option>
                {
                  cars.map((car) => (
                    <option key={car} value={car} onChange={this.handleName}>{car}</option>
                  ))
                }
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControlSelect2}>
              <InputLabel htmlFor="age-native-simple">Año</InputLabel>
              <Select
                native
                value={this.state.age}
                onChange={this.handleChange('age')}
                inputProps={{ name: 'age', id: 'age-native-simple'}}>
                <option value=""></option>
                { items }
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl component="fieldset" className={classes.formControl2}>
              <FormLabel component="legend">Plan:</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="plans"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="basic"
                    control={
                      <Radio
                        color="primary"
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                      />
                    }
                    label="Basico"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    value="complete"
                    control={
                      <Radio
                        color="primary"
                        icon={<RadioButtonUncheckedIcon fontSize="small" />}
                        checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                      />
                    }
                    label="Completo"
                    labelPlacement="start"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <Button variant="outlined" color="primary" className={classes.button}>
              Cotizar
            </Button>

        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Form);
