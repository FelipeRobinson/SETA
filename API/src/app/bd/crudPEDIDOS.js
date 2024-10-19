class PEDIDOS{
   // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }
   
   ListaDadosDaTabelaPedidos(){
      return new Promise((Resolve,Reeject) => {
         var sql ="SELECT * FROM Pedidos"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("Erro no SELECT FULL da tabela Pedidos");  }
         return resolve(recordset);
       });
      })
   }
}