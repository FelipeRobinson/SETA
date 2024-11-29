const { poolPromise } = require("../../config/database");

class PEDIDOS {
   // construtor da classe
   constructor() {}

   // SELECT FULL
   async ListaDadosDaTabelaPedidos() {
      try {
         const pool = await poolPromise;
         const result = await pool.request().query("SELECT * FROM pedidos");
         return result.recordset;
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: SELECT FULL da tabela PEDIDOS");
      }
   }

   // INSERT
   async insereNovoPedidoNaTabelaPedidos(dados) {
      const { usuario_id, servico_id, data_pedido } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('usuario_id', sql.Int, usuario_id)
            .input('servico_id', sql.Int, servico_id)
            .input('data_pedido', sql.DateTime, data_pedido)
            .query("INSERT INTO pedidos (usuario_id, servico_id, data_pedido) VALUES (@usuario_id, @servico_id, @data_pedido)");
         return "SUCESSO: INSERT de novo pedido na tabela PEDIDOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: INSERT de novo registro da tabela PEDIDOS");
      }
   }

   // UPDATE
   async atualizaDadosDoPedidoNaTabelaPedidos(id, dados) {
      const { usuario_id, servico_id, data_pedido } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .input('usuario_id', sql.Int, usuario_id)
            .input('servico_id', sql.Int, servico_id)
            .input('data_pedido', sql.DateTime, data_pedido)
            .query("UPDATE pedidos SET usuario_id = @usuario_id, servico_id = @servico_id, data_pedido = @data_pedido WHERE id = @id");
         return "SUCESSO: UPDATE de pedido na tabela PEDIDOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: UPDATE de pedido na tabela PEDIDOS");
      }
   }

   // DELETE
   async excluiDadosDoPedidoNaTabelaPedidos(id) {
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM pedidos WHERE id = @id");
         return "SUCESSO: DELETE de pedido na tabela PEDIDOS";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: DELETE de pedido na tabela PEDIDOS");
      }
   }
}

module.exports = PEDIDOS;
