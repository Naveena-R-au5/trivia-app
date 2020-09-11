import React,{useState,useEffect,useContext} from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import firebase from '../../firebase'
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import style from './h.module.css'
import {UserContext} from '../../App'
import Navbar from '../navbar/navbar'

JavascriptTimeAgo.addLocale(en)
const History =()=>{
  const {state,dispatch} = useContext(UserContext)
    const [data,setData] = useState([])
    
        firebase
        .firestore()
        .collection('user')
        .onSnapshot((snapshot)=>{
          const userid = snapshot.docs.map((doc)=>({
            id:doc.id,
            // datetime:firebase.Timestamp.fromDate(new Date()),
            ...doc.data()
        }))
          setData(userid)
         console.log(userid)
        })
       

    return (
      <>
      <Navbar/>
     
        <div className={style.main}>
        <h2 >List of all Contestents</h2>
           {data?data.map((d)=>{
             
             return(
              <Card className={style.root}>
                <div key={d.id?d.id:''}>
                  <h3 className={style.box} style={{color:'blue',fontWeight:'bold'}}>Name :&nbsp; {d.name?d.name:"NA"}</h3>
                  <h4 className={style.box}>Attemted :&nbsp;{d.datetime?<ReactTimeAgo style={{color:"grey"}} date={d.datetime?d.datetime.toDate().toISOString():'NA'}/>:""}<br/></h4>
                  <h4 className={style.box}> Question 1:&nbsp;&nbsp;What are the colors in the Indian Flag?</h4>
                  <h4 className={style.box}> Answer :&nbsp;  
        {d.checkedItems?Object.keys(d.checkedItems).map((key, i) => {return(
          <span key={i}>
            <span> {key?key:'NA'},</span>
          </span>
        )}):''}
       </h4>

      <h4 className={style.box}>Question 2:&nbsp;&nbsp; Who is the best cricketer in the world?</h4>
      <h4 className={style.box}>Answer :&nbsp; {d.ans?d.ans:'NA'}</h4>
                 
                </div>
                </Card> 
             )
            
           }):'null'}
         
        </div>
        </>
    )
}

export default History;