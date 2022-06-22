import {useEffect, useState} from "react";
import * as CategoriasService from "../../Services/categorias.service";


function CategoriasForm({onSubmit,buttonText}) {


    const [name, setName] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        onSubmit({name});
    }

    function handleName(event){
        setName(event.target.value);
    }


    return (
        <div>
            <form action="#" onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" onChange={handleName} value={name}/>
                </label>
                <button type="submit">{buttonText}</button>
            </form>

        </div>
    )
}

CategoriasForm.defaultProps = {
    buttonText: "Crear categoria"
}

export default CategoriasForm;