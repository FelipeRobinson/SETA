const bd = require("../../config/database");
const Pagamentos = require("../BD/crudAcesso_Pagamento");

class controllerPagamentos {
    
    pegaTodosOsDadosDaTabelaPagamentos() {
        return function(request, response) {
            const pagamentosCRUD = new Pagamentos(bd);
            pagamentosCRUD.listaDadosDaTabelaPagamentos()
                .then((resultados) => {
                    console.log(resultados);
                    response.status(200).json(resultados);
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao buscar os pagamentos' });
                });
        };
    };

    fazInclusaoDeNovoPagamento() {
        return function(request, response) {
            var dadosPagamento = request.body;
            var pedido_id = request.body.pedido_id;
            var valor = request.body.valor;
            var metodo_pagamento = request.body.metodo_pagamento;
    
            const dados = { pedido_id, valor, metodo_pagamento };
            console.log("Dados vindos do POSTMAN = " + dados.pedido_id + " - " + dados.valor + " - " + dados.metodo_pagamento);
    
            const pagamentosCRUD = new Pagamentos(bd);
            pagamentosCRUD.insereDadosNaTabelaPagamentos(dados)
            .then(() => {
                console.log("SUCESSO: Novo Pagamento incluso na tabela PAGAMENTOS");
                response.status(200).json({ mensagem: "Pagamento incluído com sucesso!" });
            })
            .catch(erro => console.log(erro));
        };
    }
    
    
    fazExclusaoDePagamento() {
        return function(request, response) {
            var { id } = request.params;
            const pagamentosCRUD = new Pagamentos(bd);
            pagamentosCRUD.excluiDadosDoPagamentoNaTabelaPagamentos(id) //falta esse metodo no crud menines
                .then(() => {
                    console.log("Excluindo um pagamento na tabela PAGAMENTOS");
                    response.status(200).json({ mensagem: 'Pagamento excluído com sucesso!' });
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao excluir o pagamento' });
                });
        };
    };
}

module.exports = controllerPagamentos;
