const bd = require("../../config/database");
const USUARIO = require("../bd/crudUSUARIO");

class controllerUSUARIO {
  //Método do insert 
  fazInclusaoDeNovosUsuarios() {
    return function(request,response) {
      var dandosvindospostman = request.body;
      var usuario = request.body.usuario;
      var email = request.body.email;
      var celular = request.body.celular;
      var senha = request.body.senha;
      var cpf = request.body.cpf;
      var endereco = request.body.endereco;
      var data_criacao = request.body.data_criacao;

      const dados = (usuario, email, celular, senha,cpf,endereco,data_criacao);
      console.log("Dados vindos do POSTMAN = " + dados.usuario + " - " + dados.email+ " - " + dados.celular + " - " + dados.senha  + " - "+dados.cpf + " - "+ dados.endereco  + " - " + dados.data_criacao);

      //pegar os dados do INSERT via request.body
      const usuCRUD = new USUARIO(bd);
      usuCRUD.insereNovoClienteNaTabelaClientes(dados)
      .then(() => {
        console.log("incluindo um novo cliente na tabela clientes");
        response.status(200).json({mensagem:"método faz insereNovoClienteNaTabelaClientes()"});
      })
      .catch(erro => console.log(erro));
    }
  }
}