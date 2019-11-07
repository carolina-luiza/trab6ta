const express = require("express");
const routes = express.Router();
const UserController = require('./controllers/UserController');
const ComercioController = require('./controller/ComercioController');

rotas.post('/cadastrar', UserController.cadastrar);
rotas.get('/listar', UserController.listar);
rotas.get('/listar/:id', UserController.deletar);
rotas.post('/listar/atualizar/:id', UserController.atualizar);

rotas.post('/cadastrar', ComercioController.cadastrar);
rotas.get('/listar', ComercioController.listar);
rotas.get('/listar/:id', ComercioController.deletar);
rotas.post('/listar/atualizar/:id', ComercioController.atualizar);


module.exports = routes;