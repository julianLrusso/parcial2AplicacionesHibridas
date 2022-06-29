import React, { Fragment, useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import * as gameServices from '../Services/game.service.js'
import FormCreateGame from '../components/Game/formCreateGame.jsx'

function GameCreator ({requiresAdmin}) {

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user')) || 'user';
        requiresAdmin(user.type)
    }, [])

    function saveGame (game, descripcion, categoria) {
        console.log(game, '-', descripcion, '-', categoria)
        const data = {
            nombre: game,
            descripcion: descripcion,
            idCategoria: categoria._id,
            nombreCategoria: categoria.nombre,
        }

        gameServices.createGame(data)
        .then( (gameCreado) => console.log(gameCreado) )
    }

    return (
        <FormCreateGame onSubmit={saveGame} />
    )
}

export default GameCreator