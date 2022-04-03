import React from 'react'
import logoPerfil from '../imagens-menu/Vector (2).svg'



export default function(){
    return (
        <div className="menu-blocoPerfil">
            
            <div className="menu-perfilImg">
            <img src={logoPerfil}></img>
            </div>

            <div>
                <h3>
                    <div className='menu-hello'>Olá,</div>
                    <div className='menu-nomeDoUsuario' >Gustavo Henrique</div>
                </h3>
                
            </div>
        </div>
    )
}