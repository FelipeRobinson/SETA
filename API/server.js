const aplicacao = require("./src/config/express");
let porta = 3000;

aplicacao.lisen(porta, () => {
    console.log("API rodando!")
})