import CategoriasList from "./components/Projects/CategoriasList";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import './css/main.css';
import './css/bootstrap.min.css';

function App() {
    return (
        <div className="app">
            <Header />
            <CategoriasList/>
            <Footer />
        </div>
    )
}

export default App;