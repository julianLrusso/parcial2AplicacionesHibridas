import express from 'express';
import projectControllers from '../controllers/project.controllers.js';
import * as categoriasAPIController from '../controllers/categorias.api.controller.js';

const route = express.Router();

route.get('/:table', projectControllers.getAll);
route.post('/create/juego', projectControllers.createGame);
route.post('/create/comentario', projectControllers.createComentario);
route.post('/create/usuario', projectControllers.createUser);
route.delete('/remove/:table/:id', projectControllers.remove);
route.patch('/update/juego', projectControllers.updateGame);
route.patch('/update/usuario', projectControllers.updateUser);
route.patch('/update/comentario', projectControllers.updateComentario);

// Categorias
route.post('/api/categorias/create',categoriasAPIController.doCreate);
route.put('/api/categorias/update',categoriasAPIController.doUpdate);
route.delete('/api/categorias/delete',categoriasAPIController.doDelete);
route.get('/api/categorias',categoriasAPIController.doGetAll);

export default route
