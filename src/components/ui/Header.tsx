import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import ElevationScroll from './ElevationScroll';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../../assets/logo.svg';

const Header = (props:any) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo}/>
            <Tabs className={classes.tabContainer} value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab className={classes.tab} label="Home"/>
              <Tab className={classes.tab} label="Services"/>
              <Tab className={classes.tab} label="The Revolution"/>
              <Tab className={classes.tab} label="About Us"/>
              <Tab className={classes.tab} label="Contact Us"/>
            </Tabs>
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
    },
    tabContainer: {
      marginLeft: "auto"
    },
    tab: {
      ...theme.tab,
      minWidth: 10,
      marginLeft: "25px"
    }
  }
));

export default Header;