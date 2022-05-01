import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Usuario from './Usuario'

const Titulo = styled.h2 `
    font-size: 40px;
    color: #f76c57;
    margin: 30px;
    margin-bottom: 0;
    max-height: 20px;
`
const Perfil = styled.img `
  max-width: 80px;
  max-height: 80px;
  margin: 40px;
  margin-right:10px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: #fcb54c;
    border-radius: 1.5rem;
    transition: 1s;
  }
`
const CerrarSesion = styled.img `
  max-width: 60px;
  max-height: 60px;
  margin: 50px;
  margin-left: 10px;
  cursor: pointer;
`
const Logo = styled.img `
  max-width: 8%;
  z-index: 1;
  margin-top: 20px;
  max-height: 15%;
`

const Header = () => {
  const [nav, setNav] = useState(false)
  const [sesion, setSesion] = useState(false)
  const [cerrarSesion, setCerrarSesion] = useState(false)


  return (
    <>
    <div className='flex-space body'>
        <Titulo>  
            toParty
        </Titulo>

        <Logo 
          src='../src/img/favi.png'
          alt='Logo toParty'
        />

        <div className='flex-space'>

        <Perfil src='../src/img/profile.png' alt="perfil" />
        <CerrarSesion src='../src/img/signOut.png' alt='cerrar Sesion'  />
        </div>
    </div>

    </>
  )
}

export default Header