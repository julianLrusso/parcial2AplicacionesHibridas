import React, {useState} from "react";
import * as authService from '../../Services/auth.service.js'

function FormRegister({onLogin}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            nombre: nombre,
            password: password,
            email: email
        }

        authService.register(data)
            .then(() => authService.login(email,password))
            .then((data) => onLogin(data.user, data.token))
            .catch(err=>setError(err.message))
    }

    return (
        <div>
            <h2>Registrarse</h2>
            <form action="#" onSubmit={handleSubmit}>
                <div className="row">
                    <label className="form-label secondary-color col-md-6">
                        Usuario:
                        <input className="form-control" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </label>
                    <label className="form-label secondary-color col-md-6">
                        Nombre:
                        <input className="form-control" type="text" value={nombre} onChange={e => setNombre(e.target.value)}/>
                    </label>
                    <label className="form-label secondary-color col-md-12">
                        Contraseña:
                        <input className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <button className="btn btn-success mx-4 col" type="submit">Registrarse</button>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
            </form>

        </div>
    )
}

export default FormRegister;