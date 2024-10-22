class PAGAMENTOS{
   // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }
   
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
   
   insereDadosNaTabelaPagamentos(dados){
      return new Promise((resolve,reject) => {
         var sql = "Insert Into Pagamentos (valor,data_pagamento,metodo_pagamento) VALUES ('" + valor + "', '" + data_pagamento + "', '" + metodo_pagamento + "')";
      })

   }
}




valor DECIMAL(18, 2),
  data_pagamento DATETIME DEFAULT GETDATE(),
  metodo_pagamento VARCHAR(50),