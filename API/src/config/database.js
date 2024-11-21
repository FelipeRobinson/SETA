const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'regulus.cotuca.unicamp.br',
    user: 'BD24464',
    password: 'BD24464',
    database: 'BD24464'
});

// Criaçãoda connection do BD
connection.connect(function(erro) {
    if(erro)
        console.log("ERRO: conexão com BD");
    else
        console.log("SUCESSO: conexão com BD");
})

module.exports = connection;