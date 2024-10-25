const bd = require("../../config/database");
const Chat = require("../bd/crudCHAT");

class controllerChat {
    // nao tem crud aqui 
    pegaTodasAsMensagensDoChat() {
        return function(request, response) {
            const chatCRUD = new Chat(bd);
            chatCRUD.todosDadosTabelaChat()
                .then((resultados) => {
                    console.log(resultados);
                    response.status(200).json(resultados);
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao buscar as mensagens do chat' });
                });
        };
    };

    fazInclusaoDeNovaMensagem() {
        return function(request, response) {
            var dadosMensagem = request.body;
            var usuario_id = request.body.usuario_id;
            var destinatario_id = request.body.destinatario_id;
            var mensagem = request.body.mensagem;
            var data_enviada = request.body.Data_enviada;

            const dados = { usuario_id, destinatario_id, mensagem, data_enviada };
            console.log("Dados vindos do POSTMAN = " + dados.usuario_id + " - " + dados.destinatario_id + " - " + dados.mensagem + " - " + dados.data_enviada);
    
            const chatCRUD = new Chat(bd);
            chatCRUD.insereNovaMensagemNaTabelaChat(dados)
            .then(() => {
                console.log("SUCESSO: Nova mensagem incluída no CHAT");
                response.status(200).json({ mensagem: "Mensagem enviada com sucesso!" });
            })
            .catch(erro => console.log(erro));
        };
    }
    

    fazExclusaoDeMensagem() {
        return function(request, response) {
            var  id  = request.params;
            const chatCRUD = new Chat(bd);
            chatCRUD.excluiMensagemDaTabelaChat(id)
                .then(() => {
                    console.log("Excluindo uma mensagem no chat");
                    response.status(200).json({ mensagem: 'Mensagem excluída com sucesso!' });
                })
                .catch(erro => {
                    console.log(erro);
                    response.status(500).json({ erro: 'Erro ao excluir a mensagem' });
                });
        };
    };
}

module.exports = controllerChat;