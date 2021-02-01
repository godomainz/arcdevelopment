import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import ElevationScroll from './ElevationScroll';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logo.svg';

const Header = (props:any) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if(window.location.pathname === "/" && value !== 0){
      setValue(0);
    }
    else if(window.location.pathname === "/services" && value !== 1){
      setValue(1);
    }
    else if(window.location.pathname === "/revolution" && value !== 2){
      setValue(2);
    }
    else if(window.location.pathname === "/about" && value !== 3){
      setValue(3);
    }
    else if(window.location.pathname === "/contact" && value !== 4){
      setValue(4);
    }
  },[value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" onClick={()=>{setValue(0)}} className={classes.logoContainer} disableRipple>
              <img src={logo} alt="company logo" className={classes.logo}/>
            </Button>
            <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="primary">
              <Tab className={classes.tab} component={Link} to="/" label="Home"/>
              <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
              <Tab className={classes.tab}component={Link} to="/about" label="About Us"/>
              <Tab className={classes.tab}component={Link} to="/contact" label="Contact Us"/>
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
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
      height: "8em"
    },
    tabContainer: {
      marginLeft: "auto"
    },
    tab: {
      ...theme.tab,
      minWidth: 10,
      marginLeft: "25px"
    },
    button: {
      ...theme.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    }
  }
));

export default Header;