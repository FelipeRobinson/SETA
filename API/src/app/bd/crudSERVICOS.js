class SERVICOS {
   // construtor da classe
   constructor(conexaoBD)
   { this._bd = conexaoBD; }
   
   // SELECT FULL
   todosDadosTabelaServicos() {
      return new Promise((resolve, reject) => {
         var sql ="SELECT * FROM servicos"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("ERRO NA BD: Select FULL 'SERVICOS'");
         }
         return resolve(recordset);
         });
      })
   }

   // INSERT 
   insereNovoServicoNaTabelaServicos(dados) {
   }

   // UPDATE
   atualizaDadosDoUsuarioNaTabelaUsuarios(id, dados) {
   };

   // DELETE
   excluiDadosDoUsuarioNaTabelaUsuarios(id) {
      return new Promise((resolve, reject) => {
      });
   };
}