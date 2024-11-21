const aplicacao = require("./src/config/express");
let porta = 2855;

aplicacao.listen(porta, () => {
    console.log("API rodando!")
})