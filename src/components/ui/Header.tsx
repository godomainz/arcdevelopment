import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import ElevationScroll from './ElevationScroll';

import logo from '../../assets/logo.svg';

const Header = (props:any) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo}/>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}>
      </div>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => (
  {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em"
    },
    logo:{
      height: "7em"
    }
  }
));

export default Header;