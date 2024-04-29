//Importar o Express
var express = require('express');

//Criando variavel para ter acesso as funcionalidades do Express
var app = express();

//Rota
app.get('/', function (req, res) {
    res.write('Utulizando o Express');
    res.end();

})

//Servidor
app.listen(8080);