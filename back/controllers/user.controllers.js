import * as projectModelDB from '../services/project.db.service.js'

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

export default {
    createUser,
    updateUser
}