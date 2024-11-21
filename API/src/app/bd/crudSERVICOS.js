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
      return new Promise((resolve, reject) => {
         const { usuario, titulo, descricao, preco, categoria_id, data_criacao } = dados;

         var sql = "INSERT INTO servicos (usuario_id, titulo, descricao, preco, categoria_id, data_criacao) ";
            sql += "values('" + usuario_id + "', '" + titulo + "', '" + descricao + "', '" + preco + "', '" + categoria_id + "', '" + data_criacao + "')";
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: INSERT de novo registro da tabela SERVIÇOS");
            }
            return resolve("SUCESSO: INSERT de novo usuario na tabela SERVIÇOS");
         });
      });
   }

   // UPDATE
   atualizaDadosDoServicoNaTabelaServicos(id, dados) {
      return new Promise((resolve, reject) => {
         const { usuario, titulo, descricao, preco, categoria_id, data_criacao } = dados;
  
         var sql = "UPDATE servicos SET usuario_id = '" + dados.usuario_id + "', titulo = '" + dados.titulo + "', descricao = '" + dados.descricao + "', preco = '" + dados.preco + "', categoria_id = '" + dados.categoria_id + "', data_criacao = '" + dados.data_criacao + "'";
            sql += "' WHERE id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: UPDATE de Usuario da tabela SERVIÇOS");
            }
            return resolve("SUCESSO: UPDATE de Usuario da tabela SERVIÇOS");
         });
      });
   };

   // DELETE
   excluiDadosDoServicoNaTabelaServicos(id) {
      return new Promise((resolve, reject) => {
         var sql = "DELETE FROM servicos WHERE id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: DELETE de USUARIO da tabela SERVIÇOS");
            }
            return resolve("SUCESSO: DELETE de USUARIO da tabela SERVIÇOS");
         });
      });
   };
}