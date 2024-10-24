module.exports = (aplicacao) => {
    //const da controller AVALIACAO
    const avaliacaoController = require("../controller/controllerAVALIACAO");
    const obj_avaController = new avaliacaoController();
    //const da controller CATEGORIAS
    const categoriasController = require("../controller/controllerCATEGORIAS");
    const obj_cateController = new categoriasController();
    //const da controller CHAT
    const chatController = require("../controller/controllerCHAT");
    const obj_chatController = new chatController();
    //const da controller PAGAMENTOS
    const pagamentosController = require("../controller/controllerPAGAMENTOS");
    const obj_pagaController = new pagamentosController();
    //const da controler PEDIDOS
    const pedidosController = require("../controller/controllerPEDIDOS");
    const obj_pediController = new pedidosController();
    //const da controller SERVICOS
    const servicosController = require("../controller/controllerSERVICOS");
    const obj_serviController = new servicosController();
    //const da controller USUARIO
    const usuarioController = require("../controller/controllerUSUARIO");
    const obj_usuController = new usuarioController();

    // const middlewareCLIENTES = requere('../MODEL/middlewareAVALIACAO')

    // ***************************** ROTAS *****************************    
    // rota padrão
    aplicacao.get("/",(request,response) => {
    console.log("Acessando rota principal");
    response.status(200).send("Iniciando API em NODEJS");
    });

    //cadastra novos usuarios na tabela USUARIO
    aplicacao.post("/Usuarios",obj_usuController.fazInclusaoDeNovosUsuarios());

    //
    aplicacao.put("/Clintes",obj_clieController.fazAlteracaoDeDadosDoCliente());

}