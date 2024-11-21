class CATEGORIAS{

   constructor(conexaoBD)
   {   this._bd = conexaoBD;   }


   todosDadosTabelaCategorias(){
      return new Promise((Resolve,Reeject) => {
         var sql ="SELECT * FROM categorias"
         this._bd.query(sql,function(erro, recordset) {
         if (erro) {
            console.log(erro);
            return reject("Erro no SELECT FULL da tabela Categorias");  }
         return resolve(recordset);
       });
      })
   }


   insereNovaCategoriaNaTabelaCategorias(dados){
      return new Promise((resolve,reject) => {
         var sql = "Insert Into categorias (nome) VALUES ('" + nome + "')";
         this._bd.query(sql,function(erro, recodset) {
            if(erro){
               console.log(erro);
               return reject("Erro na Inserção de nova categoria");
            
            }
            return resolve(recordset);
         })
      })
   }


   atualizaCategoriaNaTabelaCategorias(id, dados){
      return new Promise((resolve,reject) => {
         var sql = "UPDATE categorias SET nome = '" + dados.nome +  "'";
            sql += "' WHERE id = " + id;
         this._bd.query(sql,function(erro,recordset) {
            if(erro){
               console.log(erro);
               return reject("Erro na atualização de categorias");
            }
            return resolve(recordset);
         })
      })
   }

   excluiCategoriaNaTabelaCategorias(dados){
      return new Promise((resolve, reject) => {
         var sql = "DELETE FROM categorias WHERE id = " + id;
  
         this._bd.query(sql, function(erro) {
            if (erro) {
               console.log(erro);
               return reject("ERRO: DELETE de categorias da tabela Categorias");
            }
            return resolve("SUCESSO: DELETE de categorias da tabela Categorias");
         });
      });
   };
}