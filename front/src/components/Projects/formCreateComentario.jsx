import {useState} from 'react'

function FormCreateComentario ({onSubmit}) {
    const [puntuacion, setPuntuacion] = useState("")
    const [texto, setTexto] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        onSubmit(puntuacion, texto)
    }

    function handlePuntuacion (event) {
        setPuntuacion(event.target.value)
    }

    function handleTexto (event) {
        setTexto(event.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="Puntuacion" class="form-label">Comentario</label>
                <select class="form-select" aria-label="Default select example" id="Puntuacion" value={puntuacion} onChange={handlePuntuacion}>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Three</option>
                    <option value="5">Three</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="Comentario" class="form-label">Comentario</label>
                <textarea class="form-control" id="Comentario" rows="3" value={texto} onChange={handleTexto}></textarea>
            </div>
            <button type='submit'>Agregar</button>
        </form>
    )
}

export default FormCreateComentario