module.exports = (aplicacao) => {

    //const da controller AVALIACAO
    const controllerAVALIACAOs = require("../controller/controllerAVALIACAO");
    var obj_avaController = new controllerAVALIACAOs();
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
    aplicacao.get("/", (request, response) => {
        console.log("Acessando rota principal");
        response.status(200).send("Iniciando API em NODEJS");
    });

    // tabela USUARIO
    aplicacao.post("/Usuario", obj_usuController.fazInclusaoDeNovosUsuario());
    aplicacao.get("/Usuario", obj_usuController.pegaTodosOsDadosDaTabelaUsuarios()); // Corrigido o nome da função
    aplicacao.put("/Usuario/:id", obj_usuController.fazAlteracaoDeDadosDoUsuario());
    aplicacao.delete("/Usuario/:id", obj_usuController.fazExclusaoDeDadosDoUsuario()); // Corrigido o nome da função

    // tabela Serviços
    aplicacao.post("/servicos", obj_serviController.fazInclusaoDeNovoServico());
    aplicacao.get("/servicos", obj_serviController.pegaTodosOsDadosDaTabelaServico());
    aplicacao.put("/servicos/:id", obj_serviController.fazAlteracaoDeDadosDoServico());
    aplicacao.delete("/servicos/:id", obj_serviController.fazExclusaoDeServico());

    // tabela Pedidos
    aplicacao.get("/pedidos", obj_pediController.pegaTodosOsDadosDaTabelaPedidos());
    aplicacao.post("/pedidos", obj_pediController.fazInclusaoDeNovoPedido());
    aplicacao.delete("/pedidos/:id", obj_pediController.fazExclusaoDePedido());

    // tabela pagamentos
    aplicacao.get("/pagamentos", obj_pagaController.pegaTodosOsDadosDaTabelaPagamentos());
    aplicacao.post("/pagamentos", obj_pagaController.fazInclusaoDeNovoPagamento());
    aplicacao.delete("/pagamentos/:id", obj_pagaController.fazExclusaoDePagamento());

    // tabela Chat
    aplicacao.get("/chat", obj_chatController.pegaTodasAsMensagensDoChat());
    aplicacao.post("/chat", obj_chatController.fazInclusaoDeNovaMensagem());
    aplicacao.delete("/chat/:id", obj_chatController.fazExclusaoDeMensagem());

    // tabela Categoria
    aplicacao.get("/categoria", obj_cateController.pegaTodasAsCategorias());
    aplicacao.post("/categoria", obj_cateController.fazInclusaoDeNovaCategoria());
    aplicacao.put("/categoria/:id", obj_cateController.fazAlteracaoDeCategoria());
    aplicacao.delete("/categoria/:id", obj_cateController.fazExclusaoDeCategoria());

    // tabela Avaliação
    aplicacao.get("/avaliacao", obj_avaController.pegaTodasAvaliacoes());
    aplicacao.post("/avaliacao", obj_avaController.fazInclusaoDeNovaAvaliacao());
    aplicacao.put("/avaliacao/:id", obj_avaController.alteraAvaliacao());
    aplicacao.delete("/avaliacao/:id", obj_avaController.apagaAvaliacao());
}