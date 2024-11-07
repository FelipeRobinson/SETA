class ITEMPEDIDO{

    constructor(conexaoBD)
    {   this._bd = conexaoBD;   }


    ListaDadosDaTabelaItemPedido(){
        return new Promise((Resolve,Reeject) => {
           var sql ="SELECT * FROM ItemPedido"
           this._bd.query(sql,function(erro, recordset) {
           if (erro) {
              console.log(erro);
              return reject("Erro no SELECT FULL da tabela ItemPedido");  }
           return resolve(recordset);
         });
        })
     }
  



}

module.exports = ITEMPEDIDO;