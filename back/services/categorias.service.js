import {MongoClient} from "mongodb";
const client = new MongoClient("mongodb://127.0.0.1:27017");

async function create (nombre) {
    return client.connect()
        .then(async function(){
            const db = client.db('videojuegos');
            const newCategoria = {nombre: nombre};
            const categoria = await db.collection('categorias').insertOne(newCategoria);
            client.close();
            return categoria;
        })
        .catch(function (e){
            return e;
        })
}

async function update (id, nuevoNombre){
    return client.connect()
        .then(async function(){
            const db = client.db('videojuegos');
            const categoria = await db.collection('categorias').updateOne(
                {_id:id},
                {$set: {nombre:nuevoNombre}}
            );
            client.close()
            return categoria;
        })
        .catch(function (e){
            return e;
        })
}

async function erase(id){
    return client.connect()
        .then(async function(){
            const db = client.db('videojuegos');
            const categoria = await db.collection('categorias').deleteOne({_id:id});
            client.close();
            return categoria;
        })
        .catch(e => {
            return e;
        })
}

function getAll(){
    return client.connect()
        .then(async function(){
            const db = client.db('videojuegos');
            const categorias = await db.collection('categorias').find().toArray();
            client.close();
            return categorias;
        })
        .catch(function (e){
           return e
        });
}

export {
    create,
    update,
    erase,
    getAll
}