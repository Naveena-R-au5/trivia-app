import React,{useEffect,createContext,useReducer,useContext, useState} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import {reducer,initialState} from './reducer/state'
import Home from './components/home/home'
import Question from './components/question/question'
import History from './components/history/history'
import Splash from './components/splash'

export const UserContext = createContext()

const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  const [User,setUsers] = useState([])
  console.log("st",User)
 
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    setUsers(user)
    if(user){
      dispatch({type:"USER",payload:user})
    }
    else{
      if(!history.location.pathname.startsWith('/quiz'))
      history.push('/')
    }
  },[])
  return(
    <Switch>
       <Route exact path="/">
        <Home />
      </Route>
      <Route  path="/quiz">
        <Question />
      </Route>
      <Route  path="/result/history">
        <History />
      </Route>
      
   
   </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  const [timePassed, setTimepassed] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTimePassed();
    }, 2000);
  }, [])
  const setTimePassed = () => {
    setTimepassed(true)
  }
  if (!timePassed) {
    return <Splash />
  }
  return (
    <UserContext.Provider value={{state,dispatch}} >
     <BrowserRouter>
      <Routing/>
      </BrowserRouter>
    </UserContext.Provider>
  );
 }

export default App;



