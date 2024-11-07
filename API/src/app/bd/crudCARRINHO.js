class CARRINHO{

    constructor(conexaoBD)
    {   this._bd = conexaoBD;   }


    ListaDadosDaTabelaCarrinho(){
        return new Promise((Resolve,Reeject) => {
           var sql ="SELECT * FROM Carrinho"
           this._bd.query(sql,function(erro, recordset) {
           if (erro) {
              console.log(erro);
              return reject("Erro no SELECT FULL da tabela Carrinho");  }
           return resolve(recordset);
         });
        })
     }
  



}

module.exports = CARRINHO;