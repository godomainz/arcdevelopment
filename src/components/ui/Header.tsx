import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ElevationScroll from './ElevationScroll';

const Header = (props:any) => {

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3">
            Arc Development
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}


export default Header;