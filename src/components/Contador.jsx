import React from 'react'
import '../css/contador.css'
const Contador = ({ numClics }) => {
  return (
    <React.Fragment>
    <div className='contador'>
        {numClics}
      
    </div>
    </React.Fragment>
)   
}

export default Contador
