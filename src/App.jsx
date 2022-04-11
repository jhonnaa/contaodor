
import React from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react'
function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic =()=>{
    setNumClics(numClics +1);
  }
  const reiniciarContador =()=>{
    setNumClics(0)
  }

  return (
    
    <React.Fragment>
      <div className='App'>
        
        <div className='cont-principal'>
          <Contador numClics={numClics}/>
          <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
            
          <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
        </div>
      </div>

    </React.Fragment>
    
  );
}

export default App;
