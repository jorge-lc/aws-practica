const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hola AWS desde Node.js\n');
    } else if (req.url === '/saludo') {
        res.end('Este es el segundo endpoint\n');
    } else if (req.url === '/saludito') {
        res.end('Este es el tercer endpoint\n');
    } else {
        res.statusCode === 404;
        res.end('Endpoint no encontrado\n');
    }
});

server.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})