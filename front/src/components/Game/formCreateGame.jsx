import {useState, useEffect} from 'react'
import * as categoriaServices from '../../Services/categorias.service.js'

function FormCreateGame ({onSubmit}) {
    const [nombre, setNombre] = useState("") 
    const [descripcion, setDescripcion] = useState("")
    const [categoria, setCategoria] = useState() 
    const [categoriasList, setCategoriasList] = useState([]) 
    
    function handleSubmit (event) {
        event.preventDefault()
        onSubmit(nombre, descripcion, categoria)
    }
    
    function handleNombre (event) {
        setNombre(event.target.value)
    }
    
    function handleDescripcion (event) {
        setDescripcion(event.target.value)
    }

    function handleCategoria (event) {
        console.log(event.target.value)
        setCategoria(event.target.value)
    }

    useEffect ( () => {
        categoriaServices.find()
          .then( data => setCategoriasList(data))
    }, []) 

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="Nombre" value={nombre} onChange={handleNombre}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Categorias" className="form-label">Categorías</label>
                <select className="form-select" aria-label="Default select example" id="Categorias" value={categoria} onChange={handleCategoria}>
                    {categoriasList.map((c, i)=><option key={i} value={{id:c._id, nombre: c.nombre}}>{c.nombre}</option> )}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="Descripcion" className="form-label">Descripción</label>
                <textarea className="form-control" id="Descripcion" rows="3" value={descripcion} onChange={handleDescripcion}></textarea>
            </div>
            <button type='submit'>Agregar</button>
        </form>
    )
}

export default FormCreateGame