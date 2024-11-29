const { poolPromise } = require("../../config/database");

class SERVICOS {
   // construtor da classe
   constructor() {}

   // SELECT FULL
   async todosDadosTabelaServicos() {
      try {
         const pool = await poolPromise;
         const result = await pool.request().query("SELECT * FROM servicos");
         return result.recordset;
      } catch (error) {
         console.log(error);
         throw new Error("ERRO NA BD: Select FULL 'SERVIÇOS'");
      }
   }

   // INSERT 
   async insereNovoServicoNaTabelaServicos(dados) {
      const { usuario_id, titulo, descricao, preco, categoria_id, data_criacao } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('usuario_id', sql.Int, usuario_id)
            .input('titulo', sql.VarChar, titulo)
            .input('descricao', sql.VarChar, descricao)
            .input('preco', sql.Decimal, preco)
            .input('categoria_id', sql.Int, categoria_id)
            .input('data_criacao', sql.DateTime, data_criacao)
            .query("INSERT INTO servicos (usuario_id, titulo, descricao, preco, categoria_id, data_criacao) VALUES (@usuario_id, @titulo, @descricao, @preco, @categoria_id, @data_criacao)");
         return "SUCESSO: INSERT de novo serviço na tabela SERVIÇOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: INSERT de novo registro da tabela SERVIÇOS");
      }
   }

   // UPDATE
   async atualizaDadosDoServicoNaTabelaServicos(id, dados) {
      const { usuario_id, titulo, descricao, preco, categoria_id, data_criacao } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .input('usuario_id', sql.Int, usuario_id)
            .input('titulo', sql.VarChar, titulo)
            .input('descricao', sql.VarChar, descricao)
            .input('preco', sql.Decimal, preco)
            .input('categoria_id', sql.Int, categoria_id)
            .input('data_criacao', sql.DateTime, data_criacao)
            .query("UPDATE servicos SET usuario_id = @usuario_id, titulo = @titulo, descricao = @descricao, preco = @preco, categoria_id = @categoria_id, data_criacao = @data_criacao WHERE id = @id");
         return "SUCESSO: UPDATE de serviço na tabela SERVIÇOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: UPDATE de serviço na tabela SERVIÇOS");
      }
   }

   // DELETE
   async excluiDadosDoServicoNaTabelaServicos(id) {
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM servicos WHERE id = @id");
         return "SUCESSO: DELETE de serviço na tabela SERVIÇOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: DELETE de serviço na tabela SERVIÇOS");
      }
   }
}

module.exports = SERVICOS;
