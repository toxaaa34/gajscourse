//hello
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
    res.end('<h3>Made by AArOsipov</h3>');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
