import React from 'react'
import './estilos-sobreNos/module.sobreNos4.css'
import serviço1 from './imagens-sobreNos/serviços1.svg'
import serviço2 from './imagens-sobreNos/serviços2.svg'
import serviços3e4 from './imagens-sobreNos/serviços3e4.svg'


export default function() {
  return (

    <div className="container-sobre">

      <div className="sobreLeft">
        <div className="sobreTexto">
          <h1>Serviços da Empresa</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean condimentum magna quam, vitae suscipit metus eleifend eu.Suspendisse consectetur nibh auctor purus bibendum, eget tristique lorem efficitur.Sed fringilla enim non
          </p>
        </div>
      </div>

      <div className="sobreRight">
        <div className="wrapper-top">
          <div className='box box1'>
            <div className='img-and-number'>
              <img src={serviço1} />
              <h1>01</h1>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className='box box2'>
            <div className='img-and-number excep'>
              <img src={serviço2} />
              <h1>02</h1>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="wrapper-bottom">
          <div className='box box3'>
            <div className='img-and-number'>
              <img src={serviços3e4} />
              <h1>03</h1>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className='box box4'>
            <div className='img-and-number'>
              <img src={serviços3e4} />
              <h1>04</h1>
            </div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

    </div>

  )
}
