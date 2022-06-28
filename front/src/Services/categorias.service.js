async function find(){
    return fetch('http://localhost:2052/categorias')
    .then(response => response.json());
}

async function findByID (id, table) {
    return fetch(`http://localhost:2052/proyect/${table}/${id}`)
    .then(response => response.json())
}

async function findCommentsByGame (id) {
    return fetch(`http://localhost:2052/proyect/comentario/${id}`)
    .then(response => response.json())
}

async function create(categoria){
    return fetch('http://localhost:2052/create/categoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    }).then(response => response.json());
}

async function createComentario(data, table){
    return fetch(`http://localhost:2052/proyect/${table}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json());
}

async function update(categoria){
    return fetch('http://localhost:2052/update/categoria', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    }).then(response => response.json());
}

async function doDelete(id){
    return fetch('http://localhost:2052/remove/categorias/'+id, {
        method: 'DELETE',
    }).then(response => response.json());
}

export {
    find,
    findCommentsByGame,
    findByID,
    create,
    createComentario,
    update,
    doDelete
}