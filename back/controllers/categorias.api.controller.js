import * as CategoriasModel from '../services/categorias.service.js';
import {ObjectId} from "mongodb";

function doCreate(req,res) {
    const nombre = req.body.nombre;
    CategoriasModel.create(nombre)
        .then(function (categoria){
            res.status(200).json(categoria);
        })
        .catch(function (e){
            res.status(400).json({Mensaje: 'Ocurrió un error al crear la categoría.', Error: e})
        })
}

function doUpdate(req, res){
    const nombre = req.body.nombre;
    const id = ObjectId(req.body.id);
    CategoriasModel.update(id,nombre)
        .then(function (categoria){
            res.status(200).json(categoria);
        })
        .catch(e => {
            res.status(400).json(e);
        })
}

function doDelete (req,res){
    const id = ObjectId(req.body.id);
    CategoriasModel.erase(id)
        .then(function (result){
            res.status(200).json(result)
        })
        .catch(e => {
            res.status(400).json(e);
        })
}

function doGetAll (req,res){
    CategoriasModel.getAll()
        .then(function (categorias){
            res.status(200).json(categorias);
        })
        .catch(e => {
            res.status(400).json(e);
        })
}

export {
    doCreate,
    doUpdate,
    doDelete,
    doGetAll
}