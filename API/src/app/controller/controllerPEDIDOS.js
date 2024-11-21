const bd = require("../../config/database");
const Pedidos = require("../bd/crudPEDIDOS");

class controllerPedidos {
  pegaTodosOsDadosDaTabelaPedidos() {
    return function(request, response) {
      const pedidosCRUD = new Pedidos(bd);
      pedidosCRUD.ListaDadosDaTabelaPedidos()
        .then((resultados) => {
          console.log(resultados);
          response.status(200).json(resultados);
        })
        .catch(erro => console.log(erro));
    };
  };

  fazInclusaoDeNovoPedido() {
    return function(request, response) {
        var dadosPedido = request.body;
        var id = request.body.id;
        var descricao = request.body.descricao;

        const dados = { id, descricao };
        console.log("Dados vindos do POSTMAN = " + dados.id + " - " + dados.descricao);

        const pedidosCRUD = new Pedidos(bd);
        pedidosCRUD.insereNovoPedidoNaTabelaPedidos(dados)
        .then(() => {
            console.log("SUCESSO: Novo Pedido incluso na tabela PEDIDOS");
            response.status(200).json({ mensagem: "Pedido incluído com sucesso!" });
        })
        .catch(erro => console.log(erro));
    };
  }

  fazExclusaoDePedido() {
    return function(request, response) {
      const pedidosCRUD = new Pedidos(bd);
      var { idPedido } = request.params;
  
      pedidosCRUD.excluiDadosDoPedidoNaTabelaPedidos(idPedido) // falta esse metodo amgs
        .then(() => {
          console.log("Excluindo um pedido na tabela PEDIDOS");
          response.status(200).json({ mensagem: 'Método excluiDadosDoPedidoNaTabelaPedidos() OK!' });
        })
        .catch(erro => console.log(erro));
    };
  }
} 

module.exports = controllerPedidos;