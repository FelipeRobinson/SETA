const { poolPromise } = require("../../config/database");

class CATEGORIAS {
   constructor() {}

   todosDadosTabelaCategorias() {
      return new Promise(async (resolve, reject) => {
         try {
            const pool = await poolPromise;
            const result = await pool.request().query("SELECT * FROM categorias");
            resolve(result.recordset);
         } catch (error) {
            console.log(error);
            reject("Erro no SELECT FULL da tabela Categorias");
         }
      });
   }

   insereNovaCategoriaNaTabelaCategorias(dados) {
      return new Promise(async (resolve, reject) => {
         const { nome } = dados;
         try {
            const pool = await poolPromise;
            await pool.request()
               .input('nome', sql.VarChar, nome)
               .query("INSERT INTO categorias (nome) VALUES (@nome)");
            resolve("SUCESSO: Inserção de nova categoria");
         } catch (error) {
            console.log(error);
            reject("Erro na Inserção de nova categoria");
         }
      });
   }

   atualizaCategoriaNaTabelaCategorias(id, dados) {
      return new Promise(async (resolve, reject) => {
         const { nome } = dados;
         try {
            const pool = await poolPromise;
            await pool.request()
               .input('id', sql.Int, id)
               .input('nome', sql.VarChar, nome)
               .query("UPDATE categorias SET nome = @nome WHERE id = @id");
            resolve("SUCESSO: Atualização de categoria");
         } catch (error) {
            console.log(error);
            reject("Erro na atualização de categorias");
         }
      });
   }

   excluiCategoriaNaTabelaCategorias(id) {
      return new Promise(async (resolve, reject) => {
         try {
            const pool = await poolPromise;
            await pool.request()
               .input('id', sql.Int, id)
               .query("DELETE FROM categorias WHERE id = @id");
            resolve("SUCESSO: DELETE de categorias da tabela Categorias");
         } catch (error) {
            console.log(error);
            reject("ERRO: DELETE de categorias da tabela Categorias");
         }
      });
   }
}

module.exports = CATEGORIAS;
