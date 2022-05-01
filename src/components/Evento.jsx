import React from 'react'
import styled from 'styled-components'

const Evento = () => {

const Ev = styled.aside `
  width: 80%;
  height: 55px;
  margin: 50px;
  cursor: pointer;
  transition: 1s;
  background-color: #ffffff;
  color: #83530c;
  font-size: 18px;
  border-radius: 1.2rem;
  margin-top: 40px;

  &:hover {
    background-color: #fcb54c;
    border-radius: 2rem;
    color: #ffffff;
    transition: 0.5s;
  }
`

const ImgEven = styled.img `
  max-width: 45px;
  max-height: 45px;
  cursor: pointer;
  transition: 1s;
  border-radius: 1.2rem;
  margin-right: 50px;
  margin-top: 5px;

  &:hover {
    background-color: #f76c57;
    border-radius: 2rem;
    color: #ffffff;
    transition: 0.5s;
  }
`


return (
    <Ev>

      <div className='flex-space'>
        <h3 className='even'>Evento</h3>
        <ImgEven src="../src/img/eventoExpacion.png" alt="down" />
      </div>

      
    
    </Ev>
  )
}

export default Evento

//Crear Eventos especifico para cada categoria, 
//para poder filtrarlos, cuando cambie el state del filtro.

//Pensar en agregar imagenes de muestra sobre eventos ficticios.

//Funcionalidad del boton de mas informacion del evento.

//Dentro encontraremos{
//  Tipo de evento: Nombre y emoji sobre el evento\
//  Organizador del evento: Nombre, y opcion de meterse en su perfil
//  Descripcion: Cuadro de texto para explicar el evento
//  Solicitud de entrar: Puede ser publico o privado
//}

//Publico: el organizador deja que todo el que se quiera unir pueda hacerlo, y unirse al chat interno
//Privado: Va por solicitud, con un mensaje, y la opcion que te vean el perfil personal, aunque lo tengas privado.