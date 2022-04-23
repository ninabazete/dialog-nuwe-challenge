import React from "react";

function ButtonThree(props) {

 function clickHere() {
    console.log('Clicked!')
}

 return (

  <div className="container-btn">
 
   <button className="button-white" onClick={clickHere}>
    {props.buttonThree}
   </button>

  </div>
 )
}

export default ButtonThree;