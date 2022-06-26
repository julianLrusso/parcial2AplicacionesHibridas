import express from 'express';
import projectControllers from '../controllers/project.controllers.js';

const route = express.Router();

route.get('/:table', projectControllers.getAll);
// Rutas crear
route.post('/create/juego', projectControllers.createGame);
route.post('/create/comentario', projectControllers.createComentario);
route.post('/create/usuario', projectControllers.createUser);
route.post('/create/categoria', projectControllers.createCategory);

//Ruta eliminar
route.delete('/remove/:table/:id', projectControllers.remove);

// Rutas actualizar
route.patch('/update/juego', projectControllers.updateGame);
route.patch('/update/usuario', projectControllers.updateUser);
route.patch('/update/comentario', projectControllers.updateComentario);
route.patch('/update/categoria', projectControllers.updateCategory);

export default route
