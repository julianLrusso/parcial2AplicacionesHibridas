import {React, useEffect, useState} from "react";
import * as GameService from '../Services/game.service';
import {Link} from "react-router-dom";

function GameList() {
    const [games, setGames] = useState([])

    useEffect(()=>{
        GameService.find()
            .then(games => setGames(games))
    }, [])

    return (
        <div className="container my-4">
            <h2>Juegos</h2>
            {games.map((game, i) =>
            <div className="card" key={i}>
                <div className="card-body">
                    <h3 className="main-background p-4 mb-0"><Link to={'/juegos/'+game._id}>{game.nombre}</Link></h3>
                    <div className="secondary-color secondary-background p-3">
                        <p>{game.descripcion}</p>
                        <p>Puntuación: {game.puntuacion}</p>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default GameList;