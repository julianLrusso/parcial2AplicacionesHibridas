import {useEffect} from "react";
import CategoriasList from "../components/Projects/CategoriasList";

function CategoriasABM({requiresAdmin}) {

    useEffect(()=> {
        const user = JSON.parse(localStorage.getItem('user')) || 'user';
        requiresAdmin(user.type)
    }, [])

    return (
        <CategoriasList />
    )
}

export default CategoriasABM;