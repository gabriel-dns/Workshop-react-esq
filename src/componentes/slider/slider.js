import React, { useEffect,useState, useRef } from 'react'
import './slider.css'
import Error from './error'
import Card from './card/card'


export default function(){

    const [data,setData] = useState([]);
    const carousel = useRef(null);

    const handleftClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    const handRighttClick = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

return (
    <div>
    <div className="container">

        {/* TITULO */}
        <div className='favTitle'>
            <h1>
                Produtos em Destaque
            </h1>
        </div>
            {/* SLIDER */}
        <div className="carousel" ref={carousel}>       
            {cards}
        </div>

            {/* CONTROLADORES */}
        <div className="btns">
                            <button onClick={handleftClick}>
                            </button>
                            <button onClick={handRighttClick}>
                            </button>
                            <button onClick={handRighttClick}>
                           
                            </button>
                             
        </div>

        

    </div>
    </div>

)




}