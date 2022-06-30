
async function find(){
    console.log(JSON.stringify(localStorage.getItem('token')))
    return fetch('http://localhost:2052/proyect/categorias', {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json());
}

async function findByID (id, table) {
    return fetch(`http://localhost:2052/proyect/${table}/${id}`, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
}

async function findCommentsByGame (id) {
    console.log(id)
    return fetch(`http://localhost:2052/proyect/comentario/${id}`, {
        headers: {
            'auth-token': localStorage.getItem('token')
        }
    })
    .then(response => response.json())
    .then(response => console.log(response))
}

async function create(categoria){
    return fetch('http://localhost:2052/proyect/categoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(categoria)
    }).then(response => response.json());
}

async function createComentario(data, table){
    return fetch(`http://localhost:2052/proyect/${table}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

async function update(categoria){
    return fetch('http://localhost:2052/proyect/categoria', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify(categoria)
    }).then(response => response.json());
}

async function deleteCategoria(id){
    return fetch('http://localhost:2052/proyect/categorias/'+id, {
        method: 'DELETE',
        'auth-token': localStorage.getItem('token')
    }).then(response => response.json());
}

export {
    find,
    findCommentsByGame,
    findByID,
    create,
    createComentario,
    update,
    deleteCategoria
}