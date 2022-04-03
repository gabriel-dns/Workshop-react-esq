import React, { useCallback } from 'react'
import InputForm from  './inputForm'
import style from  './module.form.css'
import assunto from './imagens-form/assunto.svg'
import correio from './imagens-form/correio.svg'
import email from './imagens-form/email.svg'
import insta from './imagens-form/insta.svg'
import pessoa from './imagens-form/pessoa.svg'
import whats from './imagens-form/whats.svg'
import Vector from './imagens-form/Vector.svg';
import { useForm  } from 'react-hook-form'
import api from '../../services/api'


export default function(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = useCallback((data) =>{
        api.post('/sendMail', data )
          .then(() => {
           alert('Email enviado com sucesso!')
          })
          .catch( (error) => {
            alert('Erro ao enviar email: '+error)
          });
    },[])

    return(
        <div class="form-FormBox">

            <div className="form-LeftForm">
                <div className='form-left-wrap'>
                    <h2 className='form-left-contato'>Entre em contato</h2>
                    <img src={correio} className='form-correio'></img>

                    <div className='form-insta-wrap'>
                        <img src={insta} className='form-insta'></img>
                        <p>@sintesejr</p>
                    </div>
                    
                    <div className='form-whats-wrap'>
                        <img src={whats} className='form-whats'></img>
                        <p>(11) 99999-9999</p>
                    </div>

                </div>
            </div>

            <div className="form-RightForm">
                
                <form onSubmit={handleSubmit(onSubmit)} >
                    
                    <div className="form-input-evol">
                        {/* <label>Nome  </label> */}
                        <input className="form-inputGenerico form-texto-nome" name="nome" {...register("nome")} placeholder="Digite seu nome" type="text"/>
                        <img className='form-lupa form-pessoa' src={pessoa}></img>
                    </div>

                    <div className="form-input-evol">
                        {/* <label>Email  </label> */}
                        <input className="form-inputGenerico form-texto-naoNome" name="email" {...register("email")} placeholder="Digite seu Email" type="text"/>
                        <img className='form-lupa form-email' src={email}></img>
                    </div>
                
                    
                
                    <div className="form-input-evol form-evolArea">
                
                        {/* <label className="labArea">Digite a mensagem  </label> */}
                        <textarea placeholder="Digite a mensagem" className = 'form-texto-naoNome' name="mensagem" {...register("mensagem")} rows="5" cols="33">
                        </textarea>
                
                    </div>
                    
                    <button className="form-btnForm"  type="submit"> 
                        Enviar
                        <img className="form-setinha" src={Vector}/>
                    </button>

                </form>
            </div>
    </div>

    )

}