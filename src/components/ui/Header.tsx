import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ElevationScroll from './ElevationScroll';

const Header = (props:any) => {

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          Arc Development
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}


export default Header;