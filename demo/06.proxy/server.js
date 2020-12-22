const http = require('http')
const fs = require('fs')
const wait = s => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, s * 1000)
    })
}
http.createServer(function (req, res) {
    console.log(req.headers.host)
    if (req.url === '/') {
        const html = fs.readFileSync('index.html', 'utf-8')
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end(html)
    }
    if (req.url === '/data') {
        res.writeHead(200, {
            //  'Cache-Control': 'max-age=2,s-maxage=50,no-store'
            'Cache-Control': 's-maxage=50',
            Vary: 'X-Test-Cache'
        })
        wait(2).then(() => res.end('success'))
    }
}).listen(8888)
console.log('server ok')