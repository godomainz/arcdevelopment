import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import ElevationScroll from './ElevationScroll';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg';

const Header = (props:any) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex ] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index: number) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(index);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
    setValue(1);
  };

  const menuOptions: {name: string, link: string}[] = [ {name: "Services",link: "/services"}, 
                                                      {name: "Custom Software Development",link: "/customsoftware"},
                                                      {name: "Mobile App Development",link: "/mobileapps"},
                                                      {name: "Website Development",link: "/websites"}];

  useEffect(() => {
    switch (window.location.pathname){
      case "/":
        if(value !== 0){
          setValue(0);
        }
        break;
      case "/services":
        if(value !== 1){
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if(value !== 1){
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if(value !== 1){
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if(value !== 1){
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case "/revolution":
        if(value !== 2){
          setValue(2);
        }
        break;
      case "/about":
        if(value !== 3){
          setValue(3);
        }
        break;
      case "/contact":
        if(value !== 4){
          setValue(4);
        }
        break;
      case "/estimate":
        if(value !== 5){
          setValue(5);
        }
        break;
      default:
        setValue(0);
        break;

    }
  },[value]);


  const tabs = ( 
    <React.Fragment>
      <Tabs className={classes.tabContainer} value={value} onChange={handleChange} indicatorColor="primary">
                <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                <Tab aria-owns={anchorEl ? "simple-menu" : undefined} 
                      aria-haspopup={anchorEl ? true : undefined} 
                      className={classes.tab} component={Link}
                      onMouseOver={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => handleClick(event)}
                      to="/services" 
                      label="Services"/>
                <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
                <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
                <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"/>
              </Tabs>
        
              <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
              <Menu id="simple-menu" 
                    anchorEl={anchorEl} 
                    classes={{paper: classes.menu}} 
                    open={open} onClose={handleClose} 
                    MenuListProps={{onMouseLeave: handleClose}}
                    elevation={0}>
                {
                  menuOptions.map((option,i) =>(
                    <MenuItem
                      key={i}
                      onClick={(event:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>handleMenuItemClick(event,i)} 
                      component={Link} 
                      to={option.link} 
                      classes={{root: classes.menuItem}}
                      selected={i === selectedIndex && value === 1}>
                      {option.name}
                      </MenuItem>
                  ))
                }
                
              </Menu>
    </React.Fragment> 
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button component={Link} to="/" onClick={()=>{setValue(0)}} className={classes.logoContainer} disableRipple>
              <img src={logo} alt="company logo" className={classes.logo}/>
            </Button>
            { matches ? null : tabs}
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
      marginBottom: "3em",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em"
      }
    },
    logo:{
      height: "8em",
      [theme.breakpoints.down("md")]: {
        height: "7em",
      },
      [theme.breakpoints.down("xs")]: {
        height: "5.5em"
      }
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
    },
    menu: {
      backgroundColor: theme.blue,
      color: "white",
      borderRadius: 0
    },
    menuItem: {
      ...theme.tab,
      opacity: 0.7,
      "&:hover": {
        opacity: 1
      }
    }
  }
));

export default Header;