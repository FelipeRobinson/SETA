class AVALIACAO{
   // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }

   ListaDadosDaTabelaAvaliacao(){
      return new Promise((Resolve,Reeject) => {
         var sql ="SELECT * FROM Avaliacao"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("Erro no SELECT FULL da tabela Avaliacao");  }
         return resolve(recordset);
       });
      })
   }
}

module.exports = AVALIACAO;