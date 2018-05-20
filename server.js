
var fs = require("fs")
var express = require("express");
var app = express();

app.use(require('prerender-node'))

app.get("/*", function(request, response){
	console.log(request.url)
    var filePath = request.url.substr(1);
    fs.readFile(filePath, function(error, data){
                 
        if(error){
                     
            response.statusCode = 404;
            response.end("<h1>no response</h1>");
        }   
        else{
            response.end(data);
        }
        return;
    })
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000,()=>console.log('server started'));