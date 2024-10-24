const bd = require("../../config/database");
const Categorias = require("../BD/crudCategorias");

class controllerCategorias {

    pegaTodasAsCategorias() {
        return function(request, response) {
            const categoriasCRUD = new Categorias(bd);
            categoriasCRUD.todosDadosTabelaCategorias()
                .then((resultados) => {
                    console.log(resultados);
                    response.status(200).json(resultados);
                })
                .catch(erro => console.log(erro));
        };
    }

    fazInclusaoDeNovaCategoria() {
        return function(request, response) {
            var  nome  = request.body;
            const dados =  nome ;

            console.log("POSTMAN = " + dados.nome);
            const categoriasCRUD = new Categorias(bd);
            categoriasCRUD.insereNovaCategoriaNaTabelaCategorias(dados)
                .then(() => {
                    console.log("Incluindo uma nova categoria na tabela CATEGORIAS");
                    response.status(200).json({ mensagem: 'Categoria incluída com sucesso!' });
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao incluir a categoria' });
                });
        };
    }

    fazAlteracaoDeCategoria() {
        return function(request, response) {
            const  id  = request.params;
            var  nome = request.body;
            const dados = { nome };

            console.log("POSTMAN = " + dados.nome);
            const categoriasCRUD = new Categorias(bd);
            categoriasCRUD.atualizaCategoriaNaTabelaCategorias(id, dados)
                .then(() => {
                    console.log("Alterando uma categoria na tabela CATEGORIAS");
                    response.status(200).json({ mensagem: 'Categoria alterada com sucesso!' });
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao alterar a categoria' });
                });
        };
    }

    fazExclusaoDeCategoria() {
        return function(request, response) {
            const { id } = request.params; 
            const categoriasCRUD = new Categorias(bd);
            categoriasCRUD.excluiCategoriaNaTabelaCategorias(id)
                .then(() => {
                    console.log("Excluindo uma categoria na tabela CATEGORIAS");
                    response.status(200).json({ mensagem: 'Categoria excluída com sucesso!' });
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao excluir a categoria' });
                });
        };
    }
}

module.exports = controllerCategorias;