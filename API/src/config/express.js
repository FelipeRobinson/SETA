const express = require("express");
const bodyParser = require("body-parser");
const expressLayout = require("express-ejs-layouts");
const morgan = require("morgan"); // Import morgan for logging

const aplicacao = express();

// Use morgan for logging requests
aplicacao.use(morgan('combined'));

aplicacao.use(bodyParser.urlencoded({ extended: true }));
aplicacao.use(bodyParser.json()); // Add support for JSON

aplicacao.set("view engine", "ejs");
aplicacao.set("view", "./views");
aplicacao.use(expressLayout);

// Associando o arq ROTAS
const rotas = require("../app/rotas/rotas");
rotas(aplicacao);

module.exports = aplicacao;
