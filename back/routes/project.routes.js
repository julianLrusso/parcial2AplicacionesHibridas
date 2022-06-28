import express from 'express';
import projectControllers from '../controllers/project.controllers.js';
import {authorization} from "../middlewares/auth.middleware.js";

const route = express.Router();

route.all('/proyect', authorization);
route.all('/proyect/*', authorization);

// Ruta get
route.get('/proyect/:table',[], projectControllers.getAll);

route.get('/proyect/:table/:itemId', projectControllers.getByID);
route.get('/proyect/comentario/:idJuego', projectControllers.getCommentsByGame);
// Rutas crear
route.post('/proyect/juego', projectControllers.createGame);
route.post('/proyect/comentario', projectControllers.createComentario);
route.post('/proyect/categoria', projectControllers.createCategory);

//Ruta eliminar
route.delete('/proyect/:table/:id', projectControllers.remove);

// Rutas actualizar
route.patch('/proyect/juego', projectControllers.updateGame);
route.patch('/proyect/comentario', projectControllers.updateComentario);
route.patch('/proyect/categoria', projectControllers.updateCategory);

export default route
