async function find(){
    return JSON.parse(localStorage.getItem('categorias')) || [];
}

async function create(categoria){
    const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
    const newCategoria = {...categoria, id: categorias.length +1}
    categorias.push(newCategoria);
    localStorage.setItem('categorias', JSON.stringify(categorias));

    return newCategoria;
}

export {
    find,
    create
}