import React from "react";
import '../components/style/buttons.css';

function ButtonOne(props) {

  function clickMe() {  
    console.log('Clicked!');
   }

  return(

   <div className="container-btn">
 
    <button className='btn-purple' onClick={clickMe}>
     {props.buttonOne}
    </button> 
    
   </div>

    )
  }

export default ButtonOne;
