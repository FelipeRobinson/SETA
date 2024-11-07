const bd = require("../../config/database");
const Carrinho = require("../bd/crudCARRINHO");

class controllerCarrinho
{

  


  pegaTodosItensCarrinho() {
    return function(request, response) {
      const carrinhoCRUD = new Carrinho(bd);
      carrinhoCRUD.ListaDadosDaTabelaCarrinho()
        .then((resultados) => {
          console.log(resultados);
          response.status(200).json(resultados);
        })
        .catch(erro => {
          console.log(erro);
          response.status(500).json({ erro: "Erro ao buscar os produtos no CARRINHO" });
        });
    };
  }

  
}

module.exports = controllerCarrinho;
