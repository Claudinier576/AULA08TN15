//res = resposta 
//req = requisição
const http = require('http');
const productsRoom = require('./produtos')
console.log("Rodando o arquivo app.js");

http.createServer(function(req,res){
   console.log(req.url)
   switch(req.url){
    case "/produtos" :
        getProducts(res);
        break;
        case "/produtos/casa" :
            getProductshome(res);
            break;
        default: 
        defaultRoute(res);  
   }  
}).listen(8080,'localhost');
function defaultRoute(response){
    response.writeHead(200,{"Content-type": "text/plain"});
    response.end("Bem Vindo ao Servidor!")
}
function getProducts(response){
    response.writeHead(200,{"Content-type": "text/plain"});
    const stringProducts = JSON.stringify(productsRoom);
    response.end(stringProducts);
}
function getProductshome(response){
    response.writeHead(200,{"Content-type": "text/plain"});
    response.end("Televisao" +"\n" + "Monitor"+"\n"  + "Mesa");
}

function getProductsInfo(response){
    response.writeHead(200,{"Content-type": "text/plain"});
    response.end("Cama" +"\n" + "Armario"+"\n"  + "Cortina" + "\n" + "Tapetes");
}