import { ObjectId } from 'mongodb'
import * as projectModelDB from '../services/project.db.service.js'

function getAll (req, res) {
  const table = req.params.table
  projectModelDB.find(table)
    .then(function (data) {
      res.status(200).json(data)
    })
    .catch(function (err) {
      res.status(404).json({ err })
    })
}

function createGame (req, res) {
  const data = {
    nombre: req.body.nombre,
    puntuacion: 0,
    descripcion: req.body.descripcion,
    categoria: {
      _id: ObjectId(req.body.idCategoria),
      nombre: req.body.nombreCategoria
    }
  }
  const table = 'juegos'

  projectModelDB.create(data, table)
    .then(function (data) {
      res.status(201).json(data)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function createComentario (req, res) {
  const id = req.body.idJuego
  const data = {
    usuario: {
      _id: ObjectId(req.body.idUsuario),
      nombre: req.body.nombreUsuario
    },
    texto: req.body.texto,
    juego: {
      _id: ObjectId(id)
    },
    puntuacion: req.body.puntuacion
  }
  const table = 'comentarios'

  projectModelDB.create(data, table)
    .then(function (data) {
      res.status(201).json(data)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })

  const params = {
    juego: {
      _id: new ObjectId(id)
    }
  }

  projectModelDB.find(table, params)
    .then(function (data) {
      res.status(201).json(data)
    })
    .then(function (data) {
      let puntos = 0
      for (let i = 0; i < data.length; i++) {
        puntos += data[i].puntuacion
      }
      const puntosTotal = puntos / data.length

      const puntosData = {
        puntuacion: puntosTotal
      }

      projectModelDB.update(id, table, puntosData)
        .then(function (data) {
          if (data) {
            res.status(200).json(data)
          } else {
            res.status(404).json({ message: `Game #${id} cannot be found` })
          }
        })
        .catch(function (err) {
          res.status(500).json({ err })
        })
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function createUser (req, res) {
  const data = {
    nombre: req.body.nombre,
    type: req.body.type
  }
  const table = 'usuarios'

  projectModelDB.create(data, table)
    .then(function (data) {
      res.status(201).json(data)
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function createCategory(req, res) {
  const data = {
    nombre: req.body.name,
  }
  const table = 'categorias'

  projectModelDB.create(data, table)
      .then(function (data) {
        res.status(201).json(data)
      })
      .catch(function (err) {
        res.status(500).json({ err })
      })
}

function remove (req, res) {
  const table = req.params.table
  const id = req.params.id

  projectModelDB.deleteOne(id, table)
    .then(function (data) {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: `Item #${id} cannot be found` })
      }
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function updateGame (req, res) {
  const table = 'juegos'
  const id = req.body.id
  const data = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    categoria: {
      _id: ObjectId(req.body.idCategoria),
      nombre: req.body.nombreCategoria
    }
  }

  projectModelDB.update(id, table, data)
    .then(function (data) {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: `Game #${id} cannot be found` })
      }
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function updateCategory (req, res) {
  const table = 'categorias'
  const id = req.body.id;
  const data = {nombre: req.body.name};

  projectModelDB.update(id, table, data)
      .then(function (data) {
        if (data) {
          res.status(200).json(data)
        } else {
          res.status(404).json({ message: `Category #${id} cannot be found` })
        }
      })
      .catch(function (err) {
        res.status(500).json({ err })
      })
}

function updateUser (req, res) {
  const table = 'usuarios'
  const id = req.body.idUsuario
  const data = {
    nombre: req.body.nombre,
    type: req.body.type
  }

  projectModelDB.update(id, table, data)
    .then(function (data) {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: `Game #${id} cannot be found` })
      }
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

function updateComentario (req, res) {
  const table = 'comentarios'
  const id = req.body.idComentario
  const data = {
    texto: req.body.texto,
    puntuacion: req.body.puntuacion
  }

  projectModelDB.update(id, table, data)
    .then(function (data) {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: `Game #${id} cannot be found` })
      }
    })
    .catch(function (err) {
      res.status(500).json({ err })
    })
}

export default {
  getAll,
  createGame,
  createUser,
  createComentario,
  createCategory,
  remove,
  updateGame,
  updateUser,
  updateCategory,
  updateComentario
}
