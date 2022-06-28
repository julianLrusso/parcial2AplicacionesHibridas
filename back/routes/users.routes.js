import express from 'express';
import usersController from '../controllers/users.controller.js';

const route = express.Router();

route.post('/auth', usersController.create);
route.post('/auth/login', usersController.login);

export default route;