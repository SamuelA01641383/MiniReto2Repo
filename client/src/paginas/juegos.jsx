import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

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

    return (
        <div>
        <h1>Juegos</h1>
        <div className='juegos'>
            {juegos.map(juego=>(
                <div className="juego" key={juego.idJuegos}>
                    {juego.portada && <img src={juego.portada} alt=""/>}
                    <h2>{juego.Nombre}</h2>
                    <p>{juego.Plataforma}</p>
                    <p>{juego.FechaLanzamiento}</p>
                    <p>{juego.Descripcion}</p>
                    <button className="delete" onClick={()=>handleDelete(juego.idJuegos)}>Borrar juego</button>
                    <button className="update"><Link to={`/update/${juego.idJuegos}`}>Actualizar Juego</Link></button>
                </div>
            ))}
        </div>
        <button><Link to="/add">Añadir un juego</Link></button>
        </div>
    )
}

export default Juegos