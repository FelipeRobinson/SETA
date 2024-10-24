const bd = require("../../config/database");
const Servicos = require("../BD/crudAcesso_Servico");

class controllerServicos {
    
    pegaTodosOsDadosDaTabelaServico() {
        return function(request, response) {
            const servicosCRUD = new Servicos(bd);
            servicosCRUD.todosDadosTabelaServicos()
                .then((resultados) => {
                    console.log(resultados);
                    response.status(200).json(resultados);
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao buscar os serviços' });
                });
        };
    };

    fazInclusaoDeNovoServico() {
        return function(request, response) {
            var dadosServico = request.body;
            var usuario_id = request.body.usuario_id;
            var titulo = request.body.titulo;
            var descricao = request.body.descricao;
            var preco = request.body.preco;
            var categoria_id = request.body.categoria_id;
            var data_criacao = request.body.data_criacao;
    
            const dados = { usuario_id, titulo, descricao, preco, categoria_id };
            console.log("Dados vindos do POSTMAN = " + dados.usuario_id + " - " + dados.titulo + " - " + dados.descricao + " - " + dados.preco + " - " + dados.categoria_id);
    
            const servicosCRUD = new Servicos(bd);
            servicosCRUD.insereNovoServicoNaTabelaServicos(dados)
            .then(() => {
                console.log("SUCESSO: Novo Serviço incluso na tabela SERVICOS");
                response.status(200).json({ mensagem: "Serviço incluído com sucesso!" });
            })
            .catch(erro => console.log(erro));
        };
    }
    

    fazAlteracaoDeDadosDoServico() {
        return function(request, response) {
            var { id } = request.params;
            var { titulo, descricao, preco, categoria_id,data_criacao} = request.body;

            const dados = { titulo, descricao, preco, categoria_id,data_criacao};

            console.log("POSTMAN = " + JSON.stringify(dados));
            const servicosCRUD = new Servicos(bd);
            servicosCRUD.atualizaDadosDoServicoNaTabelaServicos(id, dados)
                .then(() => {
                    console.log("Atualizando um serviço na tabela SERVICOS");
                    response.status(200).json({ mensagem: 'Serviço atualizado com sucesso!' });
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao atualizar o serviço' });
                });
        };
    };

    fazExclusaoDeServico() {
        return function(request, response) {
            var { id } = request.params;
            var dandosvindospostman = request.body;
            var usuario_id = request.body.usuario_id;
            var titulo = request.body.titulo;
            var descricao = request.body.descricao;
            var preco = request.body.preco;
            var categoria_id = request.body.categoria_id;
            var data_criacao = request.body.data_criacao;
            
            const servicosCRUD = new Servicos(bd);
            servicosCRUD.excluiDadosDoServicoNaTabelaServicos(id)
                .then(() => {
                    console.log("Excluindo um serviço na tabela SERVICOS");
                    response.status(200).json({ mensagem: 'Serviço excluído com sucesso!' });
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao excluir o serviço' });
                });
        };
    };
}

module.exports = controllerServicos;
