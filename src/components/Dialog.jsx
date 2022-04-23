import React from "react";
import '../components/style/dialog.css'

function Dialog(props) {
  
 function deleteButton() {
  console.log("Bye Bye");
  }

 return (
  <div className="container-dialog">

   <button className='btn-delet' onClick={deleteButton}>
     X
   </button>     

   <img 
    className="img-dialog"
    src={require(`../components/img/image-${props.img}.svg`)} /> 

   <div className="dialog-box">
     <h1 className="dialog-title">{props.title}</h1>
     <p className="dialog-text">{props.text}</p>
   </div>

  </div> 
 )
}

export default Dialog;