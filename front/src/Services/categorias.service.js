async function find(){
    return fetch('http://localhost:2052/categorias')
        .then(response => response.json());
}

async function create(categoria){
    return fetch('http://localhost:2022/create/categoria', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)
    }) .then(response => response.json());
}

export {
    find,
    create
}