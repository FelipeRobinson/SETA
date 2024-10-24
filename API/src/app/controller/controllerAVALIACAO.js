const bd = require("../../config/database");
const Avaliacao = require("../BD/crudAvaliacao");

class controllerAvaliacao {
  
  fazInclusaoDeNovaAvaliacao() {
    return function(request, response) {
      var dadosAvaliacao = request.body;
      var servico_id = request.body.servico_id;
      var usuario_id = request.body.usuario_id;
      var nota = request.body.nota;
      var comentario = request.body.comentario;

      const dados = { servico_id, usuario_id, nota, comentario };
      console.log("Dados vindos do POSTMAN = " + dados.servico_id + " - " + dados.usuario_id + " - " + dados.nota + " - " + dados.comentario);

      const avaliacaoCRUD = new Avaliacao(bd);
      avaliacaoCRUD.insereNovaAvaliacaoNaTabelaAvaliacao(dados) // falta crud nessa
        .then(() => {
          console.log("SUCESSO: Nova Avaliação incluída na tabela AVALIACAO");
          response.status(200).json({ mensagem: "Avaliação incluída com sucesso!" });
        })
        .catch(erro => {
          console.log(erro);
          response.status(500).json({ erro: "Erro ao incluir a avaliação" });
        });
    };
  }

  pegaTodasAvaliacoes() {
    return function(request, response) {
      const avaliacaoCRUD = new Avaliacao(bd);
      avaliacaoCRUD.ListaDadosDaTabelaAvaliacao()
        .then((resultados) => {
          console.log(resultados);
          response.status(200).json(resultados);
        })
        .catch(erro => {
          console.log(erro);
          response.status(500).json({ erro: "Erro ao buscar as avaliações" });
        });
    };
  }

  alteraAvaliacao() {
    return function(request, response) {
      var dadosAvaliacao = request.body;
      var id = request.body.id;
      var nota = request.body.nota;
      var comentario = request.body.comentario;

      const dados = { id, nota, comentario };
      console.log("Dados vindos do POSTMAN = " + dados.id + " - " + dados.nota + " - " + dados.comentario);

      const avaliacaoCRUD = new Avaliacao(bd);
      avaliacaoCRUD.alteraAvaliacaoNaTabelaAvaliacao(dados) // falta crud nessa
        .then(() => {
          console.log("SUCESSO: Avaliação alterada na tabela AVALIACAO");
          response.status(200).json({ mensagem: "Avaliação alterada com sucesso!" });
        })
        .catch(erro => {
          console.log(erro);
          response.status(500).json({ erro: "Erro ao alterar a avaliação" });
        });
    };
  }

  // Apagar uma avaliação
  apagaAvaliacao() {
    return function(request, response) {
      var id = request.body.id;
      
      console.log("ID da avaliação para apagar = " + id);

      const avaliacaoCRUD = new Avaliacao(bd);
      avaliacaoCRUD.apagaAvaliacaoNaTabelaAvaliacao(id) //falta crud nessa
        .then(() => {
          console.log("SUCESSO: Avaliação apagada da tabela AVALIACAO");
          response.status(200).json({ mensagem: "Avaliação apagada com sucesso!" });
        })
        .catch(erro => {
          console.log(erro);
          response.status(500).json({ erro: "Erro ao apagar a avaliação" });
        });
    };
  }
}

module.exports = new controllerAvaliacao();
