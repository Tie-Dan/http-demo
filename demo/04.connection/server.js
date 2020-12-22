const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    if (req.url === '/') {
        const html = fs.readFileSync('index.html', 'utf-8')
        res.writeHead(200, {
            'Content-type': 'text/html',
            'Content-Security-Policy': 'script-src http: https:'
            // 'Content-Security-Policy': 'script-src \'self\'\;report-uri /report'
        })
        res.end(html)
    } else {
        res.writeHead(200, {
            'Content-Type': 'application/javascript'
        })
        res.end('console.log("loaded script")')
    }

}).listen(8888)
console.log('server ok')