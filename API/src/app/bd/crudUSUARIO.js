class USUARIO {
   // construtor da classe
   constructor(conexaoBD) {
      this._bd = conexaoBD;
   }

   // SELECT FULL
   todosDadosTabelaUsuarios() {
      return new Promise((resolve, reject) => {
         var sql = "SELECT * FROM usuarios";
         this._bd.query(sql, function(erro, recordset) {
            if (erro) {
               console.log(erro);
               return reject("ERRO NA BD: Select FULL 'USUARIOS'");
            }
            return resolve(recordset);
         });
      });
   }

   // INSERT
   insereNovoUsuarioNaTabelaUsuarios(dados) {
      return new Promise((resolve, reject) => {
         const { usuario, email, celular, senha, cpf, endereco, data_criacao } = dados;

         var sql = "INSERT INTO usuarios (usuario, email, celular, senha, cpf, endereco, data_criacao) ";
         sql += "VALUES ('" + usuario + "', '" + email + "', '" + celular + "', '" + senha + "', '" + cpf + "', '" + endereco + "', '" + data_criacao + "')";
         
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: INSERT de novo registro da tabela USUARIOS");
            }
            return resolve("SUCESSO: INSERT de novo usuario na tabela USUARIOS");
         });
      });
   }

   // UPDATE
   atualizaDadosDoUsuarioNaTabelaUsuarios(id, dados) {
      return new Promise((resolve, reject) => {
         const { usuario, email, celular, senha, cpf, endereco, data_criacao } = dados;

         var sql = "UPDATE usuarios SET usuario = '" + usuario + "', email = '" + email + "', celular = '" + celular + "', senha = '" + senha + "', cpf = '" + cpf + "', endereco = '" + endereco + "', data_criacao = '" + data_criacao + "'";
         sql += " WHERE id = " + id;

         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: UPDATE de Usuario da tabela USUARIOS");
            }
            return resolve("SUCESSO: UPDATE de Usuario da tabela USUARIOS");
         });
      });
   }

   // DELETE
   excluiDadosDoUsuarioNaTabelaUsuarios(id) {
      return new Promise((resolve, reject) => {
         var sql = "DELETE FROM usuarios WHERE id = " + id;

         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: DELETE de USUARIO da tabela USUARIOS");
            }
            return resolve("SUCESSO: DELETE de USUARIO da tabela USUARIOS");
         });
      });
   }
}

module.exports = USUARIO;