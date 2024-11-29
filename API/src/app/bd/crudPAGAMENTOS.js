const { poolPromise } = require("../../config/database");

class PAGAMENTOS {
   // construtor da classe
   constructor() {}

   // SELECT FULL
   async listaDadosDaTabelaPagamentos() {
      try {
         const pool = await poolPromise;
         const result = await pool.request().query("SELECT * FROM Pagamentos");
         return result.recordset;
      } catch (error) {
         console.log(error);
         throw new Error("Erro no SELECT FULL da tabela Pagamentos");
      }
   }

   // INSERT
   async insereDadosNaTabelaPagamentos(dados) {
      const { valor, data_pagamento, metodo_pagamento } = dados;
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('valor', sql.Decimal, valor)
            .input('data_pagamento', sql.DateTime, data_pagamento)
            .input('metodo_pagamento', sql.VarChar, metodo_pagamento)
            .query("INSERT INTO Pagamentos (valor, data_pagamento, metodo_pagamento) VALUES (@valor, @data_pagamento, @metodo_pagamento)");
         return "SUCESSO: INSERT de novos dados na tabela Pagamentos";
      } catch (error) {
         console.log(error);
         throw new Error("Erro na Inserção de novos dados na tabela Pagamentos");
      }
   }

   // DELETE
   async excluiDadosDoPagamentoNaTabelaPagamentos(id) {
      try {
         const pool = await poolPromise;
         await pool.request()
            .input('id', sql.Int, id)
            .query("DELETE FROM Pagamentos WHERE id = @id");
         return "SUCESSO: DELETE de pagamento da tabela Pagamentos";
      } catch (error) {
         console.log(error);
         throw new Error("ERRO: DELETE de pagamento da tabela Pagamentos");
      }
   }
}

module.exports = PAGAMENTOS;
