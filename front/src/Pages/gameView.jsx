import React, { Fragment, useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import * as gameServices from '../Services/categorias.service.js'
import FormCreateComentario from '../components/Projects/formCreateComentario.jsx'

function GameView () {
    const {juegoId} = useParams()
    const [juego, setJuego] = useState({})
    const [comentarios, setComentarios] = useState([])
    const table = "juegos"
    const token = localStorage.getItem('token')

    function saveComentario (comentario) {
        const userData = JSON.parse(localStorage.getItem('user'))
        const data = {
            idUsuario: userData._id,
            nombreUsuario: userData.nombre,
            texto: comentario.texto,
            idJuego: juegoId,
            puntuacion: comentario.puntuacion
        }
        const table = "comentario"
        
        gameServices.createComentario(data, table)
          .then(() => gameServices.findCommentsByGame(juegoId))   
          .then( dataC => setComentarios(dataC))   
    }

    useEffect ( () => {
        console.log("stage 1")
        gameServices.findByID(juegoId, table)
          .then( juego => setJuego(juego))
    }, [])

    useEffect ( () => {
        console.log("stage 2")
        gameServices.findCommentsByGame(juegoId)
          .then( juegoComentarios => console.log(juegoComentarios))
    }, [])
    
    /*console.log("comentarios:") 
    console.log(comentarios)*/
    return (
        <Fragment>
            {console.log(comentarios)}
            <h2>{juego.nombre}</h2>
            <p>Puntuación: {juego.puntuacion}</p>
            <p>{juego.descripcion}</p>
            <FormCreateComentario onSubmit={saveComentario} />
        </Fragment>
    )
}

export default GameView

/*
            <ul>
                {comentarios.map((c, i) => {
                <li key={i}>
                    <div>Usuario: {c.usuario.nombre}</div>
                    <p>{c.texto}</p>
                </li>})}
            </ul>
<p>Categoría: {juego.categoria.nombre}</p>

*/