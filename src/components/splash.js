import React from "react";
import '../App.css'
class Splash extends React.Component {
  render() {
    return (
      <div class="card splash">
        <div className="container">
          <div className="circle">
            <img  style={{borderRadius:"100px",alignContent:'center'}} src={require('../t.png')} alt="" width="200px" height="200px"/>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Splash;