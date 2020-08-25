var http = require ('http');

http.createServer((req,res)=>{


    const rupali="Hello rupali";
    res.end(rupali);

}).listen(5600);