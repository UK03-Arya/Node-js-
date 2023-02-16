const http = require('http');
const Api = require('./Api')
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify(Api));
resp.end();
}).listen(5000)