const { poolPromise } = require("../../config/database");

class USUARIO {
   // construtor da classe
   constructor() {}

   // SELECT FULL
   async todosDadosTabelaUsuarios() {
      try {
         const pool = await poolPromise;
         const result = await pool.request().query("SELECT * FROM usuarios");
         return result.recordset;
      } catch (error) {
         console.log(error);
         throw new Error("ERRO NA BD: Select FULL 'USUARIOS'");
      }
   }

   // INSERT
   async insereNovoUsuarioNaTabelaUsuarios(dados) {
      const { usuario, email, celular, senha, cpf, endereco, data_criacao } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('usuario', sql.VarChar, usuario)
            .input('email', sql.VarChar, email)
            .input('celular', sql.VarChar, celular)
            .input('senha', sql.VarChar, senha)
            .input('cpf', sql.VarChar, cpf)
            .input('endereco', sql.VarChar, endereco)
            .input('data_criacao', sql.DateTime, data_criacao)
            .query("INSERT INTO usuarios (usuario, email, celular, senha, cpf, endereco, data_criacao) VALUES (@usuario, @email, @celular, @senha, @cpf, @endereco, @data_criacao)");
         return "SUCESSO: INSERT de novo usuario na tabela USUARIOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: INSERT de novo registro da tabela USUARIOS");
      }
   }

   // UPDATE
   async atualizaDadosDoUsuarioNaTabelaUsuarios(id, dados) {
      const { usuario, email, celular, senha, cpf, endereco, data_criacao } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .input('usuario', sql.VarChar, usuario)
            .input('email', sql.VarChar, email)
            .input('celular', sql.VarChar, celular)
            .input('senha', sql.VarChar, senha)
            .input('cpf', sql.VarChar, cpf)
            .input('endereco', sql.VarChar, endereco)
            .input('data_criacao', sql.DateTime, data_criacao)
            .query("UPDATE usuarios SET usuario = @usuario, email = @email, celular = @celular, senha = @senha, cpf = @cpf, endereco = @endereco, data_criacao = @data_criacao WHERE id = @id");
         return "SUCESSO: UPDATE de Usuario da tabela USUARIOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: UPDATE de Usuario da tabela USUARIOS");
      }
   }

   // DELETE
   async excluiDadosDoUsuarioNaTabelaUsuarios(id) {
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM usuarios WHERE id = @id");
         return "SUCESSO: DELETE de USUARIO da tabela USUARIOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: DELETE de USUARIO da tabela USUARIOS");
      }
   }
}

module.exports = USUARIO;
