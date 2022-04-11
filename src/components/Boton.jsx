import React from 'react'
import '../css/boton.css'
const Boton = ({texto, esBotonDeClic, manejarClic}) => {
  return (
    <React.Fragment>
        <button className={esBotonDeClic ? 'btn-clic' : 'btn-reiniciar'}
        onClick ={manejarClic} >
        {texto}
        </button>
      
    </React.Fragment>
  )
}

export default Boton
