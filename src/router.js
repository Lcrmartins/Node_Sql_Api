const express = require('express');
const controllerProduto = require('./controller/ProdutoController');

const routes = express.Router();

routes.get('/List', controllerProduto.List);

routes.get('/GetOne', controllerProduto.GetOne);

routes.post('/Create', controllerProduto.Create);

routes.post('/Update', controllerProduto.Update);

routes.post('/Delete', controllerProduto.Delete);

module.exports = routes;