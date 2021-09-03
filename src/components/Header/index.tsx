import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ReactComponent as Logo } from './logo_flat_color.svg';
import { ReactComponent as LogoSmall } from './logo_flat_color_small.svg';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      marginTop: 25,
      marginBottom: 25
  },
  headerStart: {
    paddingLeft: 30,
    paddingRight: 30
  },
  headerTabs: {
    [theme.breakpoints.up('lg')]: {
      position: 'fixed',
      left: 0, 
      right: 0,
    },
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      bottom: 20,
      left: 0, 
      right: 0,
    },
  },
  headerEnd: {
    marginLeft: 'auto',
    paddingLeft: 30,
    paddingRight: 30
  }

}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const md = useMediaQuery(theme.breakpoints.only('md'));

  const trigger = useScrollTrigger({disableHysteresis: true, threshold: 0});

  return (
      <AppBar color="transparent" 
        style={{
          backgroundColor: trigger ? "#fff" : "transparent",
          transition: "0.3s",
          boxShadow: trigger ? '0px 5px 12px 1px rgba(0,0,0,0.05)' : 'none'
        }}>
          <Toolbar>
            <Box className={classes.root} display='flex' alignItems="center">
              <Box className={classes.headerStart}>
                {
                  lg ? <Logo height={30}/> : <LogoSmall height={30}/>
                }
              </Box>
            </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Header
