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
          .then( response => setComentarios(response))
    }, [])

    return (
        <Fragment>
            <h2>{juego.nombre}</h2>
            <p>Puntuación: {juego.puntuacion}</p>
            <p>{juego.descripcion}</p>
            <FormCreateComentario onSubmit={saveComentario} />
        </Fragment>
    )
}

export default GameView;