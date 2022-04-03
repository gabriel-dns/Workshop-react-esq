import React from 'react'
import './module.footer.css'
import sacola from '../sobreNos/imagens-sobreNos/footer-sacola.svg'
import whats from '../sobreNos/imagens-sobreNos/footer-whats.svg'
import insta from '../sobreNos/imagens-sobreNos/footer-insta.svg'
import facebook from '../sobreNos/imagens-sobreNos/footer-facebook.svg'
import email from '../sobreNos/imagens-sobreNos/footer-email.svg'
import telefone from '../sobreNos/imagens-sobreNos/footer-telefone.svg'
import mapa from '../sobreNos/imagens-sobreNos/footer-mapa.svg'


export default function(){
    return(
        
        <div className="container-sobre-footer">

            <div className="footer-voltar">
                <button type='button' className='footer-button'> Voltar ao início</button>
            </div>

            <div className='footer'>

                <div className='footer-left'> 
                    <div className='footer-left-top'>
                        <img src={sacola}/>
                        <div className='footer-left-text'>
                            <h2>Matheus Store</h2>
                            <p>Tudo que você precisa</p>
                        </div>
                    </div>

                    <p>Nossas redes sociais :</p>

                    <div className='footer-left-imagens'>
                        <img src={whats}/>
                        <img src={insta}/>
                        <img src={facebook}/>
                    </div>
                </div>

                <div className='footer-middle'>
                    <p>Contato:</p>

                    <div className='footer-contato'>
                        <img className='img1' src={email}/>
                        <p>síntese@store.com</p>
                    </div>

                    <div className='footer-contato'>
                        <img className='img2' src={telefone}/>
                        <p>(11)9 9999-9999</p>
                    </div>

                    <div className='footer-contato'>
                        <img className='img3' src={mapa}/>
                        <p>Endereço: Rua Síntese, 01</p>
                    </div>
                </div>

                <div className='footer-right'>
                    <p>Sobre Nós</p>
                    <div className='footer-right-topics'>Números da nossa empresa </div>
                    <div className='footer-right-topics'>Nosso time</div>
                    <div className='footer-right-topics'>Serviços</div>
                </div>

            </div>

            <div className='footer-end'>
                <hr className='footer-line'/>
                <br />

                <div className='footer-end-text'>
                    ©2021 Síntese Store - Tudo que você precisa. Todos os direitos reservados <br /> Desenvolvido por Síntese Jr.
                </div>
            </div>

        </div>
    )
}