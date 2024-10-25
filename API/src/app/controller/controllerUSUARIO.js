const bd = require("../../config/database");
const USUARIO = require("../bd/crudUSUARIO");

class controllerUSUARIO {
  // SELECT FULL
  pegaTodosOsDadosDaTabelaUsuarios() { // Corrigido o nome da função
    return function(request, response) {
      const usuCRUD = new USUARIO(bd);
      usuCRUD.todosDadosTabelaUsuarios()
      .then((resultados) => {
        console.log(resultados);
        response.status(200).json(resultados);
      })
      .catch(erro => console.log(erro));
    }
  }
  
  // INSERT
  fazInclusaoDeNovosUsuario() {
    return function(request, response) {
      var dadosvindospostman = request.body;
      const { usuario, email, celular, senha, cpf, endereco, data_criacao } = dadosvindospostman;

      const dados = { usuario, email, celular, senha, cpf, endereco, data_criacao };
      console.log("Dados vindos do POSTMAN = " + JSON.stringify(dados));
      
      const usuCRUD = new USUARIO(bd);
      usuCRUD.insereNovoUsuarioNaTabelaUsuarios(dados)
      .then(() => {
        console.log("SUCESSO: Novo USUARIO incluso na tabela USUARIOS");
        response.status(200).json({ mensagem: "Novo usuario inserido com sucesso!" });
      })
      .catch(erro => console.log(erro));
    }
  }

  // UPDATE
  fazAlteracaoDeDadosDoUsuario() {
    return function(request, response) {
      const usuCRUD = new USUARIO(bd);
      var { id } = request.params;
      const { usuario, email, celular, senha, cpf, endereco, data_criacao } = request.body;

      const dados = { usuario, email, celular, senha, cpf, endereco, data_criacao };
      console.log("Dados vindo do POSTMAN = " + JSON.stringify(dados));
      
      usuCRUD.atualizaDadosDoUsuarioNaTabelaUsuarios(id, dados)
      .then(() => {
        console.log("SUCESSO: Atualizado USUARIO na tabela USUARIOS");
        response.status(200).json({ mensagem: 'Usuário atualizado com sucesso!' });
      })
      .catch(erro => console.log(erro));
    }
  }

  // DELETE
  fazExclusaoDeDadosDoUsuario() { // Corrigido o nome da função
    return function(request, response) {
      const usuCRUD = new USUARIO(bd);
      var { id } = request.params;

      usuCRUD.excluiDadosDoUsuarioNaTabelaUsuarios(id)
      .then(() => {
        console.log("SUCESSO: Excluído USUARIO na tabela USUARIOS");
        response.status(200).json({ mensagem: 'Usuário excluído com sucesso!' });
      })
      .catch(erro => console.log(erro));
    };
  }
}

module.exports = controllerUSUARIO;