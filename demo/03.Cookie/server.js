const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    console.log(req.headers.host)
    if (req.url === '/') {
        const html = fs.readFileSync('index.html', 'utf-8')
        res.writeHead(200, {
            'Content-type': 'text/html',
            'Set-cookie': ['id=123;max-age=2', 'abc=456;HttpOnly']
        })
        res.end(html)
    }

}).listen(8888)
console.log('server ok')