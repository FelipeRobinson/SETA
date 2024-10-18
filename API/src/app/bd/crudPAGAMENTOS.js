class PAGAMENTOS{
       // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }

   
   ListaDadosDaTabelaPagamentos(){
    return new Promise((Resolve,Reeject) => {
        var sql ="SELECT * FROM Pagamentos"
        this._bd.query(sql,function(erro, recordset)
       {
         if (erro) {
            console.log(erro);
            return reject("Erro no SELECT FULL da tabela Pagamentos");  }
         return resolve(recordset);
       });
    })
   }
}