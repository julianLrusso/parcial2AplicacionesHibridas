import {useEffect, useState} from "react";
import * as CategoriasService from "../../Services/proyect.service";
import CategoriasForm from "./CategoriasForm";


function CategoriasList() {
    const [categorias, setCategorias] = useState([]);

    useEffect(()=>{
        CategoriasService.find()
            .then(categorias => setCategorias(categorias))
    }, [])

    function saveCategoria(categoria){
        CategoriasService.create(categoria)
            .then(()=>CategoriasService.find() )
            .then(categorias => setCategorias(categorias))
    }

    function updateCategoria(categoria){
        CategoriasService.update(categoria)
            .then(()=>CategoriasService.find() )
            .then(categorias => setCategorias(categorias))
    }

    function deleteCategoria(id){
        CategoriasService.deleteCategoria(id)
            .then(()=>CategoriasService.find() )
            .then(categorias => setCategorias(categorias))
    }

    return (
        <div className="container my-4">
            <h2>Administrar categorias</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="main-background main-color p-4 mt-3">Crear categoria</h3>
                    <CategoriasForm onSubmit={saveCategoria} />
                    <div>
                        <h3 className="main-background main-color p-4 mt-3">Listado de categorias</h3>
                        <div className="row">
                        { categorias.map((categoria, i) =>
                            <div key={i} className="card mt-4 mx-2 col-md-5">
                                <div className="card-body">
                                    <div key={i}>
                                        <CategoriasForm onSubmit={updateCategoria} nombre={categoria.nombre} id={categoria._id} buttonText={'Actualizar'} />
                                        <button key={i} className="btn btn-danger" onClick={() => deleteCategoria(categoria._id)}>Eliminar</button>
                                    </div>
                                </div>
                            </div>) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriasList;