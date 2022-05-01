import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import Gruporden from './Gruporden'


const ContenedorFiltro = styled.article `
  
  height: 80vh;
  width: 360px;
  background-color: #e6ddd8;
  border-radius: 1rem;
  margin: 0;
  margin-top: 20px;
`
const Menu = styled.img `
  cursor: pointer;
  
`
const FiltroH2 = styled.h2 `
  font-size: 18px;
  margin:10px 25px 25px 25px;
`

const Filtro = () => {
    const [filtro, setFiltro] = useState(true)
  return (

      <ContenedorFiltro>
        <div className='flex'>
            <Menu src="../src/img/menu.png" alt='menu' className='block'/>
            <h3 className='centrar-filtro m-0'>Filtro</h3>
        </div>

        <FiltroH2>- Que Apetece?</FiltroH2>
        
        <Gruporden />
            
        
    </ContenedorFiltro>
  )
}

export default Filtro

// Dar estilo a los label
// Agregar los subfiltros dependiendo de lo seleccionado
// Quitar el margin rigth del filtro para posicionar Eventos.jsx