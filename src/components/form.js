import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import Snackbar from '@material-ui/core/Snackbar';

const cars = [
  "Alfa Romeo", "BMW", "Lexus",
  "Mercedes Benz", "Porsche", "Subaru",
  "Toyota",
];

const styles = {
  formControlSelect1: {
    marginTop: 5,
    display: 'flex',
    margin: 'auto',
    maxWidth: 200,
  },
  formControlSelect2: {
    marginTop: 20,
    display: 'flex',
    margin: 'auto',
    maxWidth: 200,
  },
  formControl2: {
    marginTop: 30,
    display: 'flex',
    margin: 'auto',
    maxWidth: 120,
  },
  FormControlLabel: {
    margin: 'auto',
    marginLeft: 15,
    marginRight: 0
  },
  group: {
    display: 'flex',
    margin: 'auto'
  },
  button: {
    marginTop: 20,
    display: 'flex',
    margin: 'auto'
  }
};

class Form extends Component {
  constructor (props){
    super(props);
    this.state = {
      brand: '',
      age: '',
      plan: '',
      open: false,
      vertical: 'top',
      horizontal: 'right',
      message: ''
    }
    this.brandRef = React.createRef();  //mediante estas referencias se puede leer cualquier campo o input
    this.ageRef = React.createRef()
    this.planRef = React.createRef()
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSnack = (state) => () => {
    console.log(state);
    this.setState({ open: true, ...state });
 };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Send!!!');
    // obtener los datos
    // console.log(this.brandRef.props.value);
    // console.log(this.ageRef.props.value);
    // console.log(this.planRef.props.value);
    if(!this.brandRef.props.value){
      this.setState({
        message: 'Debes ingresar la marca de tu vehiculo',
        open: true,
      })
    }
    else if(!this.ageRef.props.value){
      this.setState({
        message: 'Debes ingresar el año de tu vehiculo',
        open: true
       })
    }
    else if(!this.planRef.props.value){
      this.setState({
        message: 'Debes ingresar el plan que quieres seleccionar',
        open: true,
      })
    }
    else {
      // crear el objeto
      const carInfo = {
        brand: this.brandRef.props.value,
        age: this.ageRef.props.value,
        plan: this.planRef.props.value
      }
      // console.log(carInfo);
      // enviarlo al component principal
      this.props.quoteSafe(carInfo);
    }

    // Resetear el formulario
    this.setState({
      brand: '', age: ''
    })
  };



  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleRadioButtonChange = (name) => (event) => {
    this.setState({ value: event.target.value});
  };


  render(){
    const { classes } = this.props;
    const { vertical, horizontal, open } = this.state;
    const currentYear = new Date().getFullYear();
    const items = [];
    for(let i = 1994; i <= currentYear; i++){
      items.push(<option key={i} value={i}>{i}</option>);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <Snackbar
           className={classes.bar}
           anchorOrigin={{ vertical, horizontal }}
           open={open}
           onClose={this.handleClose}
           ContentProps={{ 'aria-describedby': 'message-id' }}
           message={<span id="message-id">{this.state.message}</span>}
         />
        <h5 className="title-header">Ingrese los datos su vehiculo</h5>
        <div style={{ margin: '10px'}}>
          <div>
            <FormControl className={classes.formControlSelect1}>
              <InputLabel htmlFor="brand-native-simple">Marca</InputLabel>
              <Select
                ref={(option) => { this.brandRef = option }}
                native
                value={this.state.brand}
                onChange={this.handleChange('brand')}
                inputProps={{ name: 'brand', id: 'brand-native-simple'}}>
                <option value=""></option>
                {
                  cars.map((car) => (
                    <option key={car} value={car}>{car}</option>
                  ))
                }
              </Select>
            </FormControl>

          </div>
          <div>
            <FormControl className={classes.formControlSelect2}>
              <InputLabel htmlFor="age-native-simple">Año</InputLabel>
              <Select
                ref={(option) => { this.ageRef = option }}
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
                ref={(option) => { this.planRef = option }}
                aria-label="planes"
                name="plans"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleRadioButtonChange('plans')}
                >
                  <FormControlLabel
                    value="basic"
                    className={classes.FormControlLabel}
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
                    className={classes.FormControlLabel}
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
            <Button type="submit" variant="outlined" color="primary" className={classes.button}>
              Cotizar
            </Button>

        </div>
      </form>
    )
  }
}

export default withStyles(styles)(Form);
