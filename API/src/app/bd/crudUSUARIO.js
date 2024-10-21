class USUARIO {
   // construtor da classe
   constructor(conexaoBD)
   { this._bd = conexaoBD; }
   
   // SELECT FULL
   todosDadosTabelaUsuarios() {
      return new Promise((resolve, reject) => {
         var sql ="SELECT * FROM usuarios"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("ERRO NA BD: Select FULL");
         }
         return resolve(recordset);
         });
      })
   }

   // INSERT 
   insereNovoUsuarioNaTabelaUsuarios(dados) {
      return new Promise((resolve, reject) => {
         const { cpfClie,nomeClie,dataNiverClie,emailClie } = dados;
         var sql = "INSERT INTO CLIENTES (usuario, email, celular, senha, cpf, endereco, data_criacao) ";
            sql += "values('" + usuario + "', '" + email + "', '" + celular + "', '" + senha + "', '" + cpf + "', '" + endereco + "', '" + data_criacao + "')";
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("Erro no INSERT de novo registro da tabela CLIENTES");
            }
            return resolve("Novo cliente inserido com sucesso na tabela CLIENTES");
         });
      });
   }

   // 
}