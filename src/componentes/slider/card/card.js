import React from 'react'
import '../slider.css'


export default function({id,nome,descricao,imagem}){
    return(
        <div className="item">

                 <div className="image" key={id}>
                     <img src={imagem} alt="produto"  />
                </div>
                <div className="info">
                    <span className="name" >{nome}  </span>
                    <span className="price" >{descricao}</span>

       
        </div>

        </div>
    )
}