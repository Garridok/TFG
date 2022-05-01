import React from 'react'
import styled from 'styled-components'
import Evento from './Evento'


const Boton = styled.button `
  width: 130px;
  height: 55px;
  margin: 40px;
  margin-right:40px;
  cursor: pointer;
  transition: 1s;
  background-color: #f76c57;
  color: white;
  font-size: 18px;
  border-radius: 1.2rem;

  &:hover {
    background-color: #fcb54c;
    border-radius: 2rem;
    transition: 1s;
  }
`
const Orden = styled.select `
  width: 140px;
  max-height: 50px;
  margin-left: 40px;
  margin-top: 40px;
  margin-right:10px;
  cursor: pointer;
  transition: 0.5s;
  background-color: #f76c57;
  color: white;
  font-size: 20px;
  text-align: center;
  border-radius: 1.5rem;
  

  &:hover {
    background-color: #e75139;
    border-radius: 1.5rem;
    transition: 0.5s;
  }
`
const Botonera = styled.section `
  min-width: 80%;
 

`

const OrdenEvento = () => {
  return (
    <Botonera>
      <div className='botonera'>
        <Boton>Nuevo evento </Boton>

        {/* Orden de las lista       */}
        <Orden name="orden" id="ordenEvento">
          <option className='optionOrden' value={"ahora"}>Ahora</option>
          <option className='optionOrden' value={"semana"}>Esta Semana</option>
          <option className='optionOrden' value={"mes"}>Esta Mes</option>
        </Orden>
      </div>
      {/* Aqui introduciremos la lista de evento */}
      <Evento />
    </Botonera>
  )
}

export default OrdenEvento