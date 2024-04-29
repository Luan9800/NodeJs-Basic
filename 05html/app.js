// Importando o Express
var express = require('express');

// Criando uma instância do aplicativo Express
var app = express();

// Especificando o diretório público para arquivos estáticos (como CSS e imagens)
app.use(express.static(__dirname + '/publico'));

// Definindo uma rota para a raiz do site ('/')
app.get('/', function (req, res) {
    // Enviando o arquivo HTML 'pagina.html' quando a rota raiz é acessada
    res.sendFile(__dirname + '/pagina.html'); 
});

// Iniciando o servidor na porta 8080
app.listen(8080);