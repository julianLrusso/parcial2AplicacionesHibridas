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

async function find(){
    console.log(JSON.stringify(localStorage.getItem('token')))
    return fetch('http://localhost:2052/proyect/juegos', {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
        .then(response => response.json());
}

export {
    createGame,
    find
}