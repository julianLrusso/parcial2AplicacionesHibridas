async function createGame (data){
    return fetch('http://localhost:2052/proyect/juego', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

export {
    createGame,
}