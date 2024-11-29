const { poolPromise } = require("../../config/database");

class CHAT {
   // construtor da classe
   constructor() {}

   // SELECT da tabela CHAT
   async todosDadosTabelaChat() {
      try {
         const pool = await poolPromise;
         const result = await pool.request().query("SELECT * FROM chat");
         return result.recordset;
      } catch (error) {
         console.log(error);
         throw new Error("Erro no SELECT FULL da tabela CHAT");
      }
   }

   // INSERT na tabela CHAT
   async insereNovaMensagemNaTabelaChat(dados) {
      const { usuario_id, destinatario_id, mensagem, data_enviada } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('usuario_id', sql.Int, usuario_id)
            .input('destinatario_id', sql.Int, destinatario_id)
            .input('mensagem', sql.VarChar, mensagem)
            .input('data_enviada', sql.DateTime, data_enviada)
            .query("INSERT INTO chat (usuario_id, destinatario_id, mensagem, data_enviada) VALUES (@usuario_id, @destinatario_id, @mensagem, @data_enviada)");
         return "SUCESSO: Nova mensagem incluída no CHAT";
      } catch (error) {
         console.log(error);
         throw new Error("Erro na Inserção de novos dados na tabela CHAT");
      }
   }

   // DELETE da tabela CHAT
   async excluiMensagemDaTabelaChat(id) {
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM chat WHERE id = @id");
         return "SUCESSO: DELETE de mensagem da tabela CHAT";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: DELETE de mensagem da tabela CHAT");
      }
   }
}

module.exports = CHAT;
