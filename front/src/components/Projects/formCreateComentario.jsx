import {useState} from 'react'

function FormCreateComentario ({onSubmit}) {
    const [puntuacion, setPuntuacion] = useState("")
    const [texto, setTexto] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        onSubmit({puntuacion: puntuacion, texto: texto})
    }

    function handlePuntuacion (event) {
        setPuntuacion(event.target.value)
    }

    function handleTexto (event) {
        setTexto(event.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Puntuacion" className="form-label">Puntuación</label>
                <select className="form-select" aria-label="Default select example" id="Puntuacion" value={puntuacion} onChange={handlePuntuacion}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="Comentario" className="form-label">Comentario</label>
                <textarea className="form-control" id="Comentario" rows="3" value={texto} onChange={handleTexto}></textarea>
            </div>
            <button type='submit'>Agregar</button>
        </form>
    )
}

export default FormCreateComentario