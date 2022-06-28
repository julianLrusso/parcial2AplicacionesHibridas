import express from 'express';
import projectControllers from '../controllers/project.controllers.js';

const route = express.Router();

route.get('/:table', projectControllers.getAll);
route.get('/proyect/:table/:itemId', projectControllers.getByID);
route.get('/proyect/comentario/:idJuego', projectControllers.getCommentsByGame);
// Rutas crear
route.post('/proyect/juego', projectControllers.createGame);
route.post('/proyect/comentario', projectControllers.createComentario);
route.post('/proyect/categoria', projectControllers.createCategory);

//Ruta eliminar
route.delete('/remove/:table/:id', projectControllers.remove);

// Rutas actualizar
route.patch('/update/juego', projectControllers.updateGame);
route.patch('/update/comentario', projectControllers.updateComentario);
route.patch('/update/categoria', projectControllers.updateCategory);

export default route
