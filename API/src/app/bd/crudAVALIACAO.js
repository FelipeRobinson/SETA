const { poolPromise } = require("../../config/database");

class AVALIACAO {
   constructor() {}

   async ListaDadosDaTabelaAvaliacao() {
      try {
         const pool = await poolPromise;
         const result = await pool.request().query("SELECT * FROM Avaliacao");
         return result.recordset;
      } catch (error) {
         console.log(error);
         throw new Error("Erro no SELECT FULL da tabela Avaliacao");
      }
   }

   async insereNovaAvaliacaoNaTabelaAvaliacao(dados) {
      const { nota, servico_id, usuario_id, comentario, data_avaliacao } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('nota', sql.Int, nota)
            .input('servico_id', sql.Int, servico_id)
            .input('usuario_id', sql.Int, usuario_id)
            .input('comentario', sql.VarChar, comentario)
            .input('data_avaliacao', sql.DateTime, data_avaliacao)
            .query("INSERT INTO Avaliacao (nota, servico_id, usuario_id, comentario, data_avaliacao) VALUES (@nota, @servico_id, @usuario_id, @comentario, @data_avaliacao)");
         return "SUCESSO: Nova Avaliação incluída na tabela AVALIACAO";
      } catch (error) {
         console.log(error);
         throw new Error("Erro na Inserção de novos dados na tabela Avaliacao");
      }
   }

   async alteraAvaliacaoNaTabelaAvaliacao(id, dados) {
      const { nota, comentario, data_avaliacao } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .input('nota', sql.Int, nota)
            .input('comentario', sql.VarChar, comentario)
            .input('data_avaliacao', sql.DateTime, data_avaliacao)
            .query("UPDATE Avaliacao SET nota = @nota, comentario = @comentario, data_avaliacao = @data_avaliacao WHERE id = @id");
         return "SUCESSO: Avaliação alterada na tabela AVALIACAO";
      } catch (error) {
         console.log(error);
         throw new Error("Erro na atualização de Avaliacao");
      }
   }

   async apagaAvaliacaoNaTabelaAvaliacao(id) {
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM Avaliacao WHERE id = @id");
         return "SUCESSO: DELETE de Avaliação da tabela AVALIACAO";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: DELETE de Avaliação da tabela AVALIACAO");
      }
   }
}

module.exports = AVALIACAO;
