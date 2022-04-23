import React from "react";
import '../components/style/buttons.css';

function clickHere() {
  console.log('Clicked!')
}

function ButtonTwo(props) {
  return (
   <div className="container-btn">

    <button className="btn-purple" onClick={clickHere}>
     {props.buttonTwo}
    </button>

   </div>
  )
}

export default ButtonTwo;