import React from 'react'
import Styles from './module.menu.css';
import logo from './imagens-menu/Vector.svg'
import InputBusca from './subpartes-menu/input-busca'
import Bloco from './subpartes-menu/perfil'
import Carrinho from './subpartes-menu/carrinho'


export default function(){
    return(
        <nav className="menu">
            <div className="menu-logo">
                <img className="menu-logoImg" src={logo}></img>
        
                <div className="menu-logo-text">
                    <h2>Matheus Store </h2>
                    <h3>Tudo que você precisa </h3>
                </div>
            </div>
        
            <div className="menu-user">
                <div className="menu-user-left">
                    <InputBusca/>
                </div>
        
                    <div className="menu-user-right">
                    {/* <Bloco/> */}
                    <Carrinho/>
                </div>
                </div>
        </nav>
    )
}

