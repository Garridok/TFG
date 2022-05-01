import styled from "styled-components"

const Modalidad = styled.button `
    width: 90%;
    height: 90px;
    margin: 15px 10px 20px 13px;
    cursor: pointer;
    border-radius: 2rem;
`
const H3event = styled.h3  `
    margin-top: 20px;
    font-size: 35px;
    font-family: 'Concert One', Uppercase;
    
`
const diccionarioEvento = {
    1: 'FIESTAS',
    2: 'OCIO',
    3: 'DEPORTES'
}




const Gruporden = () => {
  return (
      <div>
        <Modalidad><H3event>{diccionarioEvento[1]}</H3event></Modalidad>
        <Modalidad><H3event>{diccionarioEvento[2]}</H3event></Modalidad>
        <Modalidad><H3event>{diccionarioEvento[3]}</H3event></Modalidad>
    </div>
  )

}

export default Gruporden

//Modalidad; Primera fase de una busqueda sobre nuestros filtros de tipo de evento.

//Crear la segunda fase: Cuando se pulsa una opcion, cargamos la segunda ronda de preguntas
//en relacion al value.

