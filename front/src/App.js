import React, {useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Login from "./Pages/Auth/Login";
import GameView from "./Pages/gameView.jsx";
import GameList from "./Pages/GameList";
import GameCreator from "./Pages/gameCreator";
import './css/main.css';
import './css/bootstrap.min.css';
import CategoriasABM from "./Pages/categoriasABM";

function App() {
    let navigate = useNavigate();

    useEffect(
        () => {
            const token = localStorage.getItem('token');
            if (!token){
                navigate('/login', { replace: true });
            }
        }
    , [])

    function onLogin(user, token) {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        navigate('/', {replace: true})
    }

    function isAdmin(type){
        if (type !== 'admin'){
            navigate('/login', { replace: true });
        }
    }

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<GameList />} />
                <Route path="/categorias" element={<CategoriasABM requiresAdmin={isAdmin} />} />
                <Route path="/login" element={<Login onLogin={onLogin} />} />
                <Route path="/juego/nuevo" element={<GameCreator requiresAdmin={isAdmin}/>} />
                <Route path="/juegos/:juegoId" element={<GameView/>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;