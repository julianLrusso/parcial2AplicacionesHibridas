import React, { Fragment, useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import * as gameServices from '../Services/proyect.service.js'
import FormCreateComentario from '../components/Projects/formCreateComentario.jsx'

function GameView () {
    const {juegoId} = useParams()
    const [juego, setJuego] = useState({})
    const [comentarios, setComentarios] = useState([])
    const table = "juegos"

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
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <div className="d-flex justify-content-between mb-4 p-3 main-color main-background">
                        <h2>{juego.nombre}</h2>
                        <p>Puntuación: {juego.puntuacion}</p>
                    </div>
                    <p>{juego.descripcion}</p>
                    <FormCreateComentario onSubmit={saveComentario} />
                </div>
            </div>
        </div>
    )
}

export default GameView;