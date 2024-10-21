const bd = require("../../config/database");
const USUARIO = require("../bd/crudUSUARIO");

class controllerUSUARIO {
  // método do SELECT FULL
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
  
  // método do INSERT 
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
      
      //pegar os dados do INSERT via request.body
      const dados = { usuario, email, celular, senha, cpf, endereco, data_criacao };
      console.log("Dados vindos do POSTMAN = " + dados.usuario + " - " + dados.email+ " - " + dados.celular + " - " + dados.senha  + " - "+dados.cpf + " - "+ dados.endereco  + " - " + dados.data_criacao);
      const usuCRUD = new USUARIO(bd);
      usuCRUD.insereNovoUsuarioNaTabelaUsuarios(dados)
      .then(() => {
        console.log("incluindo um novo cliente na tabela clientes");
        response.status(200).json({mensagem:"método faz insereNovoClienteNaTabelaClientes()"});
      })
      .catch(erro => console.log(erro));
    }
  }

  // método do UPDATE
  fazAlteracaoDeDadosDoCliente() {
    return function(request,response) 
    {
     const clieCRUD = new CLIENTES(bd);
     var { idClie } = request.params;
     var cpfClie       = request.body.cpfClie;
     var nomeClie      = request.body.nomeClie;
     var emailClie     = request.body.emailClie;
     var dataNiverClie = request.body.dataNiverClie;  
     const dados = { cpfClie, nomeClie, dataNiverClie, emailClie };
     console.log("Dados vindo do POSTMAN = " + cpfClie + " - " + nomeClie + " - " + emailClie + " - " + dataNiverClie);
     clieCRUD.atualizaDadosDoClienteNaTabelaClientes(idClie,dados)
       .then(() => {
         console.log("Atualizando dados do cliente na tabela CLIENTES");
         response.status(200).json({ mensagem: 'Método fazAlteracaoDeDadosDoCliente() OK!'});
       })
       .catch(erro => console.log(erro));
    }
  }
}