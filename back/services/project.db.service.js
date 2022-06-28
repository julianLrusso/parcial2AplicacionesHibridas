import MongoDB, { ObjectId } from 'mongodb'
const client = new MongoDB.MongoClient('mongodb://127.0.0.1:27017')

async function find (table) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      const videojuegos = await db.collection(table).find().toArray()
      client.close()
      return videojuegos
    })
    .catch(function (e) {
      console.log('No me pude conectar')
        return e;
    })
}

async function findByID (table, id) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      const videojuegos = await db.collection(table).findOne({_id: new ObjectId(id)})
      client.close()
      return videojuegos
    })
    .catch(function (e) {
      console.log('No me pude conectar')
        return e;
    })
}

async function findCommentByGame (id) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      const comentarios = await db.collection("comentarios").find({juego: {_id: new ObjectId(id)}}).toArray()
      client.close()
      return comentarios
    })
    .catch(function (e) {
      console.log('No me pude conectar')
        return e;
    })
}

async function create (data, table) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      await db.collection(table).insertOne(data, function (err, res) {
        if (err) throw err
        console.log('Se pudo guardar')
        client.close()
      })
    })
    .catch(function (e) {
      console.log('No me pude conectar')
        return e;
    })
}

async function deleteOne (id, table) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      const response = await db.collection(table).deleteOne({ _id: new ObjectId(id) })
      client.close()
        return response;
    })
    .catch(function (e) {
      console.log('No me pude conectar')
        return e;
    })
}
async function update (id, table, data) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar');
      const db = client.db('videojuegos');
      const response = await db.collection(table).updateOne({ _id: new ObjectId(id) }, { $set:  data  })
      client.close();
      return response;
    })
    .catch(function (e) {
      console.log('No me pude conectar');
      return e;
    })
}

export {
  find,
  findCommentByGame,
  create,
  deleteOne,
  update
}
