import React,{useState,useContext, useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {UserContext} from '../../App'
import style from './n.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar=()=> {
    const history = useHistory()
    const {state,dispatch} = useContext(UserContext)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography edge="start" variant="h6" className={classes.title}>
            <span   className={style.home} onClick={()=>{localStorage.clear()
                         dispatch({type:"CLEAR"})
                         history.push('/')}}>Home</span>
          </Typography>
          {state?<Button color="inherit"><Link className={style.link} to='/quiz'>Quiz</Link></Button>:""}
          {state?<Button color="inherit"><Link className={style.link} to='/result/history'>History</Link></Button>:""}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
