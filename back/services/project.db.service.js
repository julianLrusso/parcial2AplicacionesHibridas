import MongoDB, { ObjectId } from 'mongodb'
const client = new MongoDB.MongoClient('mongodb://127.0.0.1:27017')

async function find (table, params) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      const videojuegos = await db.collection(table).find(params).toArray()
      client.close()
      return videojuegos
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
}

async function create (data, table) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      db.collection(table).insertOne(data, function (err, res) {
        if (err) throw err
        console.log('Se puedo guardar')
        client.close()
      })
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
}

async function deleteOne (id, table) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      await db.collection(table).deleteOne({ _id: new ObjectId(id) })
      client.close()
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
}
async function update (id, table, data) {
  return client.connect()
    .then(async function () {
      console.log('Me pude conectar')
      const db = client.db('videojuegos')
      await db.collection(table).updateOne({ _id: new ObjectId(id) }, { $set: { data } })
      client.close()
    })
    .catch(function () {
      console.log('No me pude conectar')
    })
}

export {
  find,
  create,
  deleteOne,
  update
}
