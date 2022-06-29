import React, { Fragment, useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import * as gameServices from '../Services/game.service.js'
import FormCreateGame from '../components/Game/formCreateGame.jsx'

function GameCreator () {

    function saveGame (game) {
        const data = {
            nombre: game.nombre,
            descripcion: game.descripcion,
            idCategoria: game.categoria._id,
            nombreCategoria: game.categoria.nombre,
        }

        gameServices.createGame(data)
        .then( (gameCreado) => console.log(gameCreado) )
    }

    return (
        <FormCreateGame onSubmit={saveGame} />
    )
}

export default GameCreator