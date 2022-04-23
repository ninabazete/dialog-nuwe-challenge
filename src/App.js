import './App.css';
import Dialog from './components/Dialog';
import ButtonOne from './components/ButtonsOne';
import ButtonThree from './components/ButtonWhite';
import ButtonTwo from './components/ButtonTwo';

function App() {


  return (
    <div className='App'>

      <div className='main-container'>
        
      <div className='dialog'>  
        <Dialog 
         img='exclamation'
         title='¡Cuidado!'
         text='No podrás volver atrás' />
       <div className='container-btn-dialog'>  
        <ButtonOne  
         buttonOne='Borrar' />
        <ButtonThree
         buttonThree='Cancelar' />
       </div>  
      </div>

      <div className='dialog'>
        <Dialog 
         img='check'
         title='¡Vamos!'
         text='Todo ha salido bien :)' />
        <ButtonTwo 
         buttonTwo='Cerrar pestaña' /> 
      </div>

      <div className='dialog'>
         <Dialog 
          img='delete'
          title='Upss'
          text='Algo ha pasado' /> 
      </div>    

      </div>
     
    </div>
  );
}

export default App;
