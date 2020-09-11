import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase'
import style from './m.module.css'
import {UserContext} from '../../App'
import Navbar from '../navbar/navbar'

const Home =()=>{
  const {state,dispatch} = useContext(UserContext)
    const [name,setName] = useState([])
    const [id,setId] = useState()
    const Submit=(e)=>{
      e.preventDefault()
        firebase
        .firestore()
        .collection('user')
        .add({
          name,
        })
       
        
        firebase
        .firestore()
        .collection('user')
        .where('name','==',`${name}`)
        .onSnapshot((snapshot)=>{
          const userid = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
          setId(userid)
          localStorage.setItem("user",JSON.stringify(userid))
          dispatch({type:"USER",payload:"userid"})
          window.location.reload();
        })

    }
   console.log('id',)
   const disabled = !name.length;
    return (
      <>
      <Navbar/>
        <div className={style.main}>
          <Card className={style.root}>
             <h3>What is your name?</h3>
            
            <form  className={style.form} noValidate autoComplete="off">
               <Input type='text' value={name} className={style.imput} placeholder='here...' onChange = {(e)=> setName(e.target.value) }/>
               <Button style={{width:'30%',marginLeft:'30%',marginTop:'30px'}} variant="contained" disabled={disabled}
               color="primary" onClick={(e)=>Submit(e)} >
                   <Link style={{textDecoration:'none',color:'white'}} to='/quiz'  >Next</Link>
              </Button>
               
    </form>
           
          </Card>
        </div>
        </>
    )
}

export default Home;