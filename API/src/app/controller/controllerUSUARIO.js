const bd = require("../../config/database");
const USUARIO = require("../bd/crudUSUARIO");

class controllerUSUARIO {
  // SELECT FULL
  pegaTodosOsDadosDaTabelaCLIENTES() {
    return function(request, response) {
      const clieCRUD = new USUARIO(bd);
      clieCRUD.todosDadosTabelaUsuarios()
      .then((resultados) => {
        console.log(resultados);
        response.status(200).json(resultados);
      })
      .catch(erro => console.log(erro));
    }
  }
  
  // INSERT 
  fazInclusaoDeNovosUsuario() {
    return function(request,response) {
      var dandosvindospostman = request.body;
      var usuario = request.body.usuario;
      var email = request.body.email;
      var celular = request.body.celular;
      var senha = request.body.senha;
      var cpf = request.body.cpf;
      var endereco = request.body.endereco;
      var data_criacao = request.body.data_criacao;
      
      //pegar os dados do INSERT via request.body
      const dados = { usuario, email, celular, senha, cpf, endereco, data_criacao };
      console.log("Dados vindos do POSTMAN = " + dados.usuario + " - " + dados.email+ " - " + dados.celular + " - " + dados.senha  + " - "+dados.cpf + " - "+ dados.endereco  + " - " + dados.data_criacao);
      const usuCRUD = new USUARIO(bd);
      usuCRUD.insereNovoUsuarioNaTabelaUsuarios(dados)
      .then(() => {
        console.log("SUCESSO: Novo USUARIO incluso na tabela USUARIOS");
        response.status(200).json({ mensagem:"método faz insereNovoUsuarioNaTabelaUsuarios()" });
      })
      .catch(erro => console.log(erro));
    }
  }

  // UPDATE
  fazAlteracaoDeDadosDoUsuario() {
    return function(request,response) {
      const clieCRUD = new USUARIO(bd);
      var { id } = request.params;
      var usuario = request.body.usuario;
      var email = request.body.email;
      var celular = request.body.celular;
      var senha = request.body.senha;
      var cpf = request.body.cpf;
      var endereco = request.body.endereco;
      var data_criacao = request.body.data_criacao;
      const dados = { usuario, email, celular, senha, cpf, endereco, data_criacao };
      console.log("Dados vindo do POSTMAN = " + usuario + " - " + email + " - " + celular + " - " + senha + " - " + cpf + " - " + endereco + " - " + data_criacao);
      clieCRUD.atualizaDadosDoUsuarioNaTabelaUsuarios(id,dados)
      .then(() => {
        console.log("SUCESSO: Atualizado USUARIO na tabela USUARIOS");
        response.status(200).json({ mensagem: 'Método atualizaDadosDoUsuarioNaTabelaUsuarios() OK!'});
      })
      .catch(erro => console.log(erro));
    }
  }

  // DELETE
  fazExclusaoDeDadosDoCliente() {
    return function(request,response) {
      const clieCRUD = new USUARIO(bd);
      var { id } = request.params;

      clieCRUD.excluiDadosDoUsuarioNaTabelaUsuarios(id)
      .then(() => {
        console.log("Excluindo um cliente na tabela CLIENTES");
        response.status(200).json({ mensagem: 'Método excluiDadosDoUsuarioNaTabelaUsuarios() OK!' })
      })
      .catch(erro => console.log(erro));
    };
  };
}