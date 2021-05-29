const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app)

app.use(express.static('public'));

server.listen(4000,()=>{console.log('Server started on 4000')})