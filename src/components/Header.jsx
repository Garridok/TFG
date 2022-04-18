import {useState, useEffect} from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Usuario from './Usuario'

const Titulo = styled.h1 `
    margin: 10px;
    font-size: 40px;
    color: #f76c57;
    margin: 30px;
    
`
const Perfil = styled.img `
  max-width: 80px;
  max-height: 80px;
  margin: 40px;
  margin-right:10px;
  cursor: pointer;
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
`
const Header = () => {
  const [nav, setNav] = useState(true)
  const [sesion, setSesion] = useState(false)
  const [cerrarSesion, setCerrarSesion] = useState(false)


  return (
    <>
    <div className='flex'>
        <Titulo>  
            toParty
        </Titulo>

        <Logo 
          src='../src/img/favi.png'
          alt='Logo toParty'
        />

        <div className='flex'>

        <Perfil src='../src/img/profile.png' alt="perfil" onClick={setSesion(true)} />
        <CerrarSesion src='../src/img/signOut.png' alt='cerrar Sesion' onClick={setCerrarSesion(true)} />
         {sesion ? (<Nav
                    sesion = {sesion}
                    setSesion = {setSesion}
                  />) : null} 

        {/* tenemos que usar grid para situar bien mas de tres cosas en linea 
            1. useState para iniciar sesion, guardamos la sesion en localStorage
            
            
          */}
       
        </div>
    </div>

    </>
  )
}

export default Header