import {useState,useEffect} from "react";


function CategoriasForm({onSubmit,buttonText,nombre,id}) {

    const [name, setName] = useState("");

    useEffect(() => {
        setName(nombre);
    }, []);

    function handleSubmit(event){
        event.preventDefault();
        const categoria = {
            name: name,
            id: id
        }
        onSubmit(categoria);
    }

    function handleName(event){
        setName(event.target.value);
    }


    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <label className="form-label secondary-color">
                    Nombre:
                    <input className="form-control" type="text" onChange={handleName} value={name}/>
                </label>
                <button className="btn btn-success mx-4" type="submit">{buttonText}</button>
            </form>

        </div>
    )
}

CategoriasForm.defaultProps = {
    buttonText: "Crear categoria",
    nombre: '',
    id: ''
}

export default CategoriasForm;