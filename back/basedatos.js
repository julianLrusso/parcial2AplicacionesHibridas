import MongoDB, { ObjectId } from 'mongodb'
const client = new MongoDB.MongoClient('mongodb://127.0.0.1:27017')

const id = '62855d6fb9ba6c0a857d1aa6'
const name = 'Recomendaciones de Películas'
console.log(id)
client.connect()
  .then(async function () {
    console.log('Me pude conectar')
    console.log(name)
    const db = client.db('Foro')
    const comentarios = await db.collection('Comentarios').find({ tema: { nombre: name } }).toArray()
    console.log(comentarios)
    client.close()
    return comentarios
  })
  .catch(function () {
    console.log('No me pude conectar')
  })
