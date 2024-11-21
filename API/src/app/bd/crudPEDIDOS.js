class PEDIDOS{
   // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }
   
   // SELECT FULL
   ListaDadosDaTabelaPedidos(){
      return new Promise((Resolve,Reeject) => {
         var sql ="SELECT * FROM pedidos"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("ERRO: SELECT FULL da tabela PEDIDOS");  }
         return resolve(recordset);
         });
      })
   }

   // INSERT
   insereNovoPedidoNaTabelaPedidos(id, dados) {
      return new Promise((resolve, reject) => {
         const { usuario, email, celular, senha, cpf, endereco, data_criacao } = dados;

         var sql = "INSERT INTO usuario (usuario, email, celular, senha, cpf, endereco, data_criacao) ";
            sql += "values('" + usuario + "', '" + email + "', '" + celular + "', '" + senha + "', '" + cpf + "', '" + endereco + "', '" + data_criacao + "')";
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: INSERT de novo registro da tabela PEDIDOS");
            }
            return resolve("SUCESSO: INSERT de novo usuario na tabela PEDIDOS");
         });
      });
   }

   // UPDATE
   atualizaDadosDoPedidoNaTabelaPedidos(id, dados) {
      return new Promise((resolve, reject) => {
         const { usuario_id, servico_id, data_pedido } = dados;
  
         var sql = "UPDATE pedido SET usuario_id = '" + dados.usuario_id + "', servico_id = '" + dados.servico_id + "', data_pedido = '" + dados.data_pedido + "'";
            sql += "' WHERE usuario_id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: UPDATE de Usuario da tabela PEDIDO");
            }
            return resolve("SUCESSO: UPDATE de Usuario da tabela PEDIDO");
         });
      });
   };

   // DELETE
   excluiDadosDoPedidoNaTabelaPedidos(id){
      return new Promise((resolve, reject) => {
         var sql = "DELETE FROM pedidos WHERE id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: DELETE de pedido da tabela PEDIDOS");
            }
            return resolve("SUCESSO: DELETE de pedido da tabela PEDIDOS");
         });
      });
   };
}