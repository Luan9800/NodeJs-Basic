// Express
var Express = require('express');

// BodyParser
var bodyParser = require('body-parser');

// App
var app = Express();

// Configurar o BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req,res) {
    res.write(req.body.nome);
    res.end();
});

//Servitor

app.listen(8080);
 