class CARRINHO{

    constructor(conexaoBD)
    {   this._bd = conexaoBD;   }


    ListaDadosDaTabelaCarrinho(){
        return new Promise((Resolve,Reeject) => {
           var sql ="SELECT * FROM Carrinho"
           this._bd.query(sql,function(erro, recordset) {
           if (erro) {
              console.log(erro);
              return reject("Erro no SELECT FULL da tabela Carrinho");  }
           return resolve(recordset);
         });
        })
     }

     InsereDadosNaTabelaCarrinho(dados){
      return new Promise((resolve,reject) => {
         var sql = "Insert Into Carrinho (produto_id) VALUES ('" + dados.produto_id + "')";
         this._bd.query(sql,function(erro, recodset) {
            if(erro){
               console.log(erro);
               return reject("Erro na Inserção de novo produto no carrinho");
            
            }
            return resolve(recordset);
         })
      })
   }

   atualizaCategoriaNaTabelaCarrinho(produto_id, dados){
      return new Promise((resolve,reject) => {
         var sql = "UPDATE categorias SET produto_id = '" + dados.produto_id +  "'";
            sql += "' WHERE produto_id = " + produto_id;
         this._bd.query(sql,function(erro,recordset) {
            if(erro){
               console.log(erro);
               return reject("Erro na atualização de carrinho");
            }
            return resolve(recordset);
         })
      })
   }

   excluiCategoriaNaTabelaCarrinho(dados){
      return new Promise((resolve, reject) => {
         var sql = "DELETE FROM categorias WHERE produto_id = " + dados.produto_id;
  
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

module.exports = CARRINHO;