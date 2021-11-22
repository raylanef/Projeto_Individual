const { response } = require('express');
const express = require('express');
const router = express.Router();
const database = require('../config/database');



router.get('/', (req, res) => {
    var query = `Select * from postagem`;
    var resultado = database.executar_query(query);
    console.log(resultado);
    res.json({
        data: resultado
    });
});

router.post('/', (req, res) => {
    var titulo = req.body.titulo;
    var texto = req.body.txt_postagem;

    var query = `Insert into postagem (titulo, corpo) values ('${titulo}', '${texto}')`;

    database.executar_query(query);
});

















module.exports = router;