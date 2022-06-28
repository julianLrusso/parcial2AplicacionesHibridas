import express from 'express'
import userControllers from '../controllers/user.controllers.js'

const route = express.Router()

route.post('/usuario/create', userControllers.createUser)
route.patch('/usuario/update', userControllers.updateUser)

export default route 