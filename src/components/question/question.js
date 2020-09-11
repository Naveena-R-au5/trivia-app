import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
import firebase from '../../firebase'
import ReactSwipe from 'react-swipe';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import style from './q.module.css'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Navbar from '../navbar/navbar'


const Home =()=>{
    const [ans,setAns] = useState('')
    const [checkedItems, setCheckedItems] = useState({});
    const [userdata,setUsers] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useState(state);
    const new_obj={};
    // console.log('ans',checkedItems)

    //code for checkbox
    const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => {
        console.log("Checkbox: ", name, checked);
      
        return (
          <input type={type} name={name} checked={checked} onChange={onChange} />
        );
      };

      const CheckboxExample = () => {
       
      
        const handleChange222 = event => {
          setCheckedItems({
            ...checkedItems,
             [event.target.name]:event.target.checked
          });
          
          console.log("checkedItems: ", checkedItems);
        };
        //checkbox values
        const checkboxes = [
          {
            name: "White",
            key: "checkBox1",
            label: "White"
          },
          {
            name: "Yellow",
            key: "checkBox2",
            label: "Yellow"
          },
          {
            name: "orange",
            key: "checkBox3",
            label: "Orange"
          },
          {
            name: "green",
            key: "checkBox4",
            label: "Green"
          },
        ];
        return(
        <div >
            <h3>1. What are the colors in Indian Flag?</h3>
        <lable>Can select more than 1 : {checkedItems["check-box-1"]} </lable> <br />
        {checkboxes.map(item => (
          <label key={item.key} className={style.color}>
            
            <Checkbox
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleChange222}
            />{item.name}<br/>
          </label>
        ))}
      </div>
        )
      }

    
    const handleChange = (event) => {
        setAns(event.target.value);
      };
    //carousel code
    const Carousel = () => {
        let reactSwipeEl;
        return(
          <>
        <div className={style.main}>
            <Card  className={style.root}>
             <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: true }}
            ref={el => (reactSwipeEl = el)}
            className={style.box}
          >
               <div><CheckboxExample /></div>
               {/* Radio code */}
            <div className='cricket'>
            <FormControl component="fieldset1">
               <h3>2. Who is the Best Cricketer in The work</h3>
               <RadioGroup aria-label="gender" name="gender1" value={ans} onChange={handleChange}>
                   <FormControlLabel value="Sachin Tendulkar" control={<Radio />} label="Sachin Tendulkar" />
                   <FormControlLabel value="Virat Kohli" control={<Radio />} label="Virat Kohli" />
                   <FormControlLabel value="Adam Gilchirst" control={<Radio />} label="Adam Gilchirst" />
                   <FormControlLabel value="Jacques Kallis"  control={<Radio />} label="Jacques Kallis" />
              </RadioGroup>
            </FormControl>
            </div>
            <div>
                <h3 style={{marginLeft:'15%'}}>Thank you for your valuable time!!</h3>
                <Button style={{marginLeft:'35%'}} variant="contained" color="primary" disableElevation onClick={(e)=>Submits(e)}>
                Finish
               </Button>
            </div>
           
          </ReactSwipe>
          </Card>
          <div className={style.button}>
          <Button  color="primary" disableElevation onClick={() => reactSwipeEl.prev()}>
              Previous
          </Button>
          <Button  color="primary" disableElevation onClick={() => reactSwipeEl.next()}>
               Next
         </Button>
        
         
          </div>
        </div>
        </>
        )
    }

    useEffect(()=>{
            const user = JSON.parse(localStorage.getItem("user"))
            setUsers(user[0])
          },[])
          // console.log('user',userdata)
          
        
    const Submits=(e)=>{
      e.preventDefault()
      // Posting data to firebase 
       const ref = firebase
        .firestore()
        .collection('user')
        .doc(`${userdata.id}`)
         ref.set({
          name:userdata.name,
          ans,
          checkedItems,
          datetime: new Date()
          
        })
    }

    return (
        <div>
          <Navbar/>
         
        <Carousel/>
        </div>
          
    )
}

export default Home;