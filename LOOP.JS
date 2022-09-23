const http = require('http');  // requires used for http

http.createServer((req, res) =>  {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });  // 2000 used for OK word

    for ( let i = 1; i <= 20; i++) {
        res.write(`${i}<br />`);  // responce back 
        console.log(i);
    }

    res.end();  // response ends here 

}).listen(3000); // port 3000