async function login(email, password){
    return fetch('http://localhost:2052/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    })
        .then(async response => {
            if(response.status === 200){
                return response.json()
            }
            throw new Error('Error de autenticación');
        })

}

async function register(nuevoUsuario){
    return fetch('http://localhost:2052/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    })
        .then(async response => {
            if(response.status === 200 || response.status === 201){
                return response.json()
            }
            throw new Error('Error de registro');
        })
}

export {
    login,
    register
}