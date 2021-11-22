const mysql = require('mysql');
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "projetoIndividual"
});


conexao.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

var postagens;

function executar_query(query) {
    conexao.query(query, function (err, result) {
        if (err) throw err;
        postagens = result;
    });
    return postagens;
}

module.exports = {executar_query};