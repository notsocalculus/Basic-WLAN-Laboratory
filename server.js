const http = require("http");

const HOST = "0.0.0.0";
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url} from ${req.socket.remoteAddress}`);

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
        <h1>This is a testing server. This device is now hosting the server on port ${PORT}.</h1>
        <p>If you can see this. Congrats! You are on the same WLAN/LAN as the server.</p>
    `);
});

server.listen(PORT, HOST, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Listening on port ${PORT}`);
});
