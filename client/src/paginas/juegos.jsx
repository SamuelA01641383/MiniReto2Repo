import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../Styles/App.css'

const Juegos = () => {
    const [juegos, setJuegos] = useState([])

    useEffect(()=>{
        const fetchjuegos = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/juegos")
                setJuegos(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchjuegos()
    },[])

    const handleDelete = async (id)=>{
        try{
            await axios.delete("http://localhost:8800/juegos/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    console.log(juegos)
    return (
        <div>
        <div className='header'>
            <h1>Bases de datos de juegos </h1>
        </div>
        
        
        <div className='juegos'>
            {
            juegos.map(juego=>(
                <div className="juego" key={juego.idJuegos}>
                    <div className='contenedor'>
                    <div >
                       <img className='imgbox' src='https://store-images.s-microsoft.com/image/apps.7759.14335040691238971.69596c0b-00e0-49eb-a6ce-2535ef602b5e.d8780f81-4399-46f1-bd6d-4027f002304d?q=90&w=480&h=270'></img>
                    {juego.portada && <img src={juego.portada} alt=""/>}
                    </div>
                    <div className='texto'>
                    <h2>{juego.Nombre}</h2>
                    <h3>Plataforma: {juego.Plataforma}</h3>
                    <h3>Fecha de lanzamiento: {juego.FechaLanzamiento}</h3>
                    <h3>Descripción: {juego.Descripcion}</h3>
                    </div>
                    <button className="delete" onClick={()=>handleDelete(juego.idJuegos)}><a>Borrar juego</a></button>
                    <button className="update"><Link to={`/update/${juego.idJuegos}`}>Actualizar Juego</Link></button>
                    
                    </div>
                </div>
                
            ))}
        </div>
        <div >
            <button className='ultimo'><Link to="/add">Añadir un juego</Link></button>
        </div>
        
        </div>
    )
}

export default Juegos