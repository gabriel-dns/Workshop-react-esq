import React from 'react'
import lupa from '../imagens-menu/Vector (1).svg'



export default function(){
return (
    <div className='menu-busca-wrapper'>
        <img className='menu-lupa' src={lupa}></img>
        <input className="menu-inputBusca" placeholder="Busque Aqui!" type="text" /> 
    </div> 
    )
} 


     