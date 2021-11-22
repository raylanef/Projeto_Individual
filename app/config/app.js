const express = require("express");
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.use(express.static('public'));
app.use('/postagens', require('../controllers/controller_postagens'));




app.listen(3000); //escolha da porta








