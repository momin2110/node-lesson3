const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';

// http.createServer((req, res)=>{
//     res.end("Hello I am your first server")
// }).listen(3000);

// const myServer = http.createServer((req, res)=>{
//     res.end("Hello I am your first server")
// })
// myServer.listen(3000, ()=>{
//     console.log(`Server is running at http://localhost:3000`);
// });

const myServer = http.createServer((req, res)=>{
    res.end("<h1>Hello I am your first server</h1>")
})
myServer.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
});


