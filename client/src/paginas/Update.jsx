import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Update = () => {
    const [juego, setJuego] = useState({
        Nombre:"",
        Plataforma:"",
        FechaLanzamiento:"",
        Descripcion:"",
        Portada:"",
    });

    const navigate = useNavigate()
    const location = useLocation()

    const idJuego = location.pathname.split("/")[2]
    console.log(idJuego)

    const handleChange = (e) =>{
        setJuego(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/juegos/"+ idJuego, juego)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(juego)
    return (
        <div className='from'>
            <h1>Actualizar juego</h1>
            <input type="text" placeholder='Nombre' onChange={handleChange} name='Nombre'/>
            <input type="text" placeholder='Plataforma' onChange={handleChange} name='Plataforma'/>
            <input type="date" placeholder='Fecha de lanzamiento' onChange={handleChange} name='FechaLanzamiento'/>
            <input type="text" placeholder='Descripcion' onChange={handleChange} name='Descripcion'/>
            <input type="text" placeholder='Portada' onChange={handleChange} name='Portada'/>
            <button onClick={handleClick}>Actualizar juego</button>
        </div>
    )
}

export default Update
