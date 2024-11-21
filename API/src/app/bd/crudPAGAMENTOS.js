class PAGAMENTOS{
   // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }
   
   // SELECT FULL
   listaDadosDaTabelaPagamentos(){
      return new Promise((resolve,reject) => {
         var sql ="SELECT * FROM Pagamentos"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("Erro no SELECT FULL da tabela Pagamentos");  }
         return resolve(recordset);
       });
      })
   }

   // INSERT
   insereDadosNaTabelaPagamentos(dados){
      return new Promise((resolve,reject) => {
         var sql = "Insert Into Pagamentos (valor,data_pagamento,metodo_pagamento) VALUES ('" + valor + "', '" + data_pagamento + "', '" + metodo_pagamento + "')";
         this._bd.query(sql,function(erro, recodset) {
            if(erro){
               console.log(erro);
               return reject("Erro na Inserção de novos dados na tabela Pagamentos");
            
            }
            return resolve(recordset);
         })
      })
   }

   // DELETE
   excluiDadosDoPagamentoNaTabelaPagamentos(id){
      return new Promise((resolve, reject) => {
         var sql = "DELETE FROM pagamentos WHERE id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: DELETE de pagamento da tabela Pagamentos");
            }
            return resolve("SUCESSO: DELETE de pagamento da tabela Pagamentos");
         });
      });
   };
}