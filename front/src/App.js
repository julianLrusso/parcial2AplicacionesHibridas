import React, {useEffect} from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';
import CategoriasList from "./components/Projects/CategoriasList";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Login from "./Pages/Auth/Login";
import GameView from "./Pages/gameView.jsx";
import GameCreator from "./Pages/gameCreator.jsx";
import './css/main.css';
import './css/bootstrap.min.css';

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

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<CategoriasList />} />
                <Route path="/login" element={<Login onLogin={onLogin} />} />
                <Route path="/juegos/:juegoId" element={<GameView/>} />
                <Route path="/juego/nuevo" element={<GameCreator/>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;