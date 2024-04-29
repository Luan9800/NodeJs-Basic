//importar o modulo http
var http = require('http');

//Criar o Servidor
http.createServer(function (req, res) {
    res.write('Nodemon');
    res.end();
}).listen(8090); 