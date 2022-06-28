import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoriasList from "./components/Projects/CategoriasList";
import Header from "./Pages/Header.jsx";
import Footer from "./Pages/Footer.jsx";
import GameView from "./Pages/gameView.jsx";
import './css/main.css';
import './css/bootstrap.min.css';

function App() {
    return (
        <div className="app">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/categorias" element={<CategoriasList/>} />    
                    <Route path="/juegos/:juegoId" element={<GameView/>} />    
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;