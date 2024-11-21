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

  atualizaCategoriaNaTabelaCategorias(id, dados){
    return new Promise((resolve,reject) => {
       var sql = "UPDATE categorias SET nome = '" + dados.nome +  "'";
          sql += "' WHERE id = " + id;
       this._bd.query(sql,function(erro,recordset) {
          if(erro){
             console.log(erro);
             return reject("Erro na atualização de categorias");
          }
          return resolve(recordset);
       })
    })
 }

 excluiCategoriaNaTabelaCarrinho(dados){
    return new Promise((resolve, reject) => {
       var sql = "DELETE FROM categorias WHERE id = " + id;

       this._bd.query(sql, function(erro) {
          if (erro) {
             console.log(erro);
             return reject("ERRO: DELETE de categorias da tabela Categorias");
          }
          return resolve("SUCESSO: DELETE de categorias da tabela Categorias");
       });
    });
 };

}

module.exports = controllerCarrinho;
