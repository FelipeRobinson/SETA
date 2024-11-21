const bd = require("../../config/database");
const ItemPedido = require("../bd/crudCARRINHO");

class controllerItemPedido
{

  


  pegaTodosItemPedido() {
    return function(request, response) {
      const itempedidoCRUD = new ItemPedido(bd);
      itempedidoCRUD.ListaDadosDaTabelaItemPedido()
        .then((resultados) => {
          console.log(resultados);
          response.status(200).json(resultados);
        })
        .catch(erro => {
          console.log(erro);
          response.status(500).json({ erro: "Erro ao buscar os produtos os pedidos de item" });
        });
    };
  }

  
}

module.exports = controllerItemPedido;