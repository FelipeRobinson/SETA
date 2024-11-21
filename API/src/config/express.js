const express = require("express");
// aplicação criada aqui
const aplicacao = express();

// "criando" o pacote bodyParser
const bodyParser = require("body-parser");

// pegando dados via req.body
aplicacao.use(bodyParser.urlencoded({
    extended: true
}));

// ativa o bodyParser + JSON
aplicacao.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// "criando" a config do EJS
const expressLayout = require("express-ejs-layouts");
aplicacao.set("view engine", "ejs");
aplicacao.set("view", "./views");
aplicacao.use(expressLayout);

// associando o arq ROTAS
const rotas = require("../app/rotas/rotas");
rotas(aplicacao);


module.exports = aplicacao;