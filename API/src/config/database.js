const sql = require("mssql");

const config = {
    user: 'BD24459',
    password: 'COTUCA',
    server: 'regulus.cotuca.unicamp.br', // You can use 'localhost' if running locally
    database: 'BD24459',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true // Change to true for local dev / self-signed certs
    }
};

// Create a connection pool
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log("SUCESSO: conexão com BD");
        return pool;
    })
    .catch(err => {
        console.log("ERRO: conexão com BD", err);
        process.exit(1);
    });

module.exports = {
    sql,
    poolPromise
};
