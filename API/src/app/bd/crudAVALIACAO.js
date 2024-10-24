class AVALIACAO{
   // construtor da classe
   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }
   
   //select da tabela AVALIACAO
   ListaDadosDaTabelaAvaliacao(){
      return new Promise((Resolve,Reeject) => {
         var sql ="SELECT * FROM Avaliacao"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("Erro no SELECT FULL da tabela Avaliacao");  }
         return resolve(recordset);
       });
      })
   }

   //INSERT na tabela AVALIACAO
   insereNovaAvaliacaoNaTabelaAvaliacao(dados){
      return new Promise((resolve,reject) => {
         var sql = "Insert Into Pagamentos (nota,servico_id,usuario_id,comentario,data_avaliacao) VALUES ('" + nota + "','"+ servico_id+ "','"+ usuario_id+  "', '" + comentario + "', '" + data_avaliacao + "')";
         this._bd.query(sql,function(erro, recodset) {
            if(erro){
               console.log(erro);
               return reject("Erro na Inserção de novos dados na tabela Pagamentos");
            
            }
            return resolve(recordset);
         })
      })
   }

   //UPDATE da tabela AVALIACAO
   alteraAvaliacaoNaTabelaAvaliacao(id, dados){
      return new Promise((resolve, reject) => {
         const {nota,comentario,data_avaliacao  } = dados;
  
         var sql = "UPDATE avaliacao SET nota = '" + dados.nota + "', comentario = '" + dados.comentario + "', comentario = '" + dados.data_avaliacao  + "'";
            sql += "' WHERE id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: UPDATE de CATEGORIA da tabela CATEGORIAS");
            }
            return resolve("SUCESSO: UPDATE de CATEGORIA da tabela CATEGORIAS");
         })
      })
   }

   //DELETE avaliacao da tabela AVALIACAO
   apagaAvaliacaoNaTabelaAvaliacao(id){
      return new Promise((resolve, reject) => {
         var sql = "DELETE FROM categorias WHERE id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: DELETE de CATEGORIA da tabela CATEGORIAS");
            }
            return resolve("SUCESSO: DELETE de CATEGORIA da tabela CATEGORIAS");
         });
      });
   };
}

module.exports = AVALIACAO;