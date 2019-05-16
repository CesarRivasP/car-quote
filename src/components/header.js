import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';


const styles = {
  root: {
    flexGrow: 1,
  },
  bar: {
    background: '#60a3bc' ,
    color: 'white',
    padding: 0
  }
};

const Header = (props) => {
  const { classes, className, ...other } = props;
  const { title } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classNames(classes.bar, className)} {...other}>
        <Toolbar>
          <h2>{title}</h2>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
