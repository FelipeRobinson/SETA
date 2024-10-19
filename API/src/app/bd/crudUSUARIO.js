class USUARIO {

   // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }
   
   ListaDadosDaTabelaUsuarios(){
      return new Promise((Resolve,Reeject) => {
         var sql ="SELECT * FROM Usuario"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("Erro no SELECT FULL da tabela Usuário");  }
         return resolve(recordset);
         });
      })
   }
}