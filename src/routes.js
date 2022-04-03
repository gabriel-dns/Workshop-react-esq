import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Main from './pages/Main/index'
import SobreNos from './pages/SobreNos'
import Produto from './pages/Produto'
import Catalogo from './pages/Catalogo'
import PaginaEspecifica from './pages/PaginaEspecifica'

export default function(){
    // refatorar
    return(
        <BrowserRouter>
           <Routes>
           <Route path='/' element={<Main/>}  />
           <Route path='/sobre-nos' element={<SobreNos/>}  />
           <Route path='/catalogo' element={<Catalogo/>}  />
           <Route path='/produto' element={<Produto/>}  />
           <Route path='/paginaespecifica' element={<PaginaEspecifica/>}  />
           </Routes>
               
             
        </BrowserRouter>
    )
}


