import * as userService from '../services/users.service.js';

function create(req, res) {
    userService.create(req.body)
        .then( () => res.status(201).json({
            message: 'User created'
        }))
        .catch(err => res.status(500).json({
            message: err.message
        }))
}

function login(req, res) {
    console.log(req.body)
    userService.login(req.body.email, req.body.password)
        .then( (user) => res.status(200).json(user))
        .catch(err => res.status(500).json({
            message: err.message
        }))
}

export default {
    create,
    login
}