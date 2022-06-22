import {useEffect, useState} from "react";
import * as CategoriasService from "../../Services/categorias.service";
import CategoriasForm from "./CategoriasForm";


function CategoriasList() {
    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
        CategoriasService.find()
            .then(categorias => setCategorias(categorias))
    }, [])

    function saveCategoria(categoria){
        CategoriasService.create({categoria})
            .then(()=>CategoriasService.find() )
            .then(categorias => setCategorias(categorias))
    }

    return (
        <div>
            <CategoriasForm onSubmit={saveCategoria} />
            <ul>
                { categorias.map((categoria, i) => <li key={i}>{categoria.name}</li>) }
            </ul>
        </div>
    )
}

export default CategoriasList;