const http = require('http');

console.log("Rodando o arquivo app.js");

//res = resposta 
//req = requisição

http.createServer(function(req,res){
    res.writeHead(200,{"Content-type": "text/plain"});
    res.end("Meu Servidor esta rodando");
    
}).listen(8080,'localhost');