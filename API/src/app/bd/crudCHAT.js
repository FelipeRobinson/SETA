class CHAT{
    // construtor da classe
   constructor(conexaoBD)
   { this._bd = conexaoBD; }

   //SELECT da tabela CHAT
   todosDadosTabelaChat(){
    return new Promise((Resolve,Reeject) => {
        var sql ="SELECT * FROM chat"
        this._bd.query(sql,function(erro, recordset) {
        if (erro) {
           console.log(erro);
           return reject("Erro no SELECT FULL da tabela CHAT");  }
        return resolve(recordset);
      });
     })
   }
   
   //INSERT na tabela CHAT
   insereNovaMensagemNaTabelaChat(dados){
    return new Promise((resolve,reject) => {
        var sql = "Insert Into chat (usuario_id,destinatario_id,mensagem,Data_enviada) VALUES ('" + usuario_id + "', '" + destinatario_id + "', '" + mensagem +  "','" + Data_enviada+  "')";
        this._bd.query(sql,function(erro, recodset) {
           if(erro){
              console.log(erro);
              return reject("Erro na Inserção de novos dados na tabela Pagamentos");
           
           }
           return resolve(recordset);
        })
     })
   }

   //DELETE da tabela CHAT
   excluiMensagemDaTabelaChat(id){
    return new Promise((resolve, reject) => {
        var sql = "DELETE  FROM chat WHERE id = " + id;
 
        this._bd.query(sql, function(erro) {
           if (erro) {
              console.log(erro);
              return reject("ERRO: DELETE de categorias da tabela Categorias");
           }
           return resolve("SUCESSO: DELETE de categorias da tabela Categorias");
        });
     });
  }
}