const http = require('http')
const fs = require('fs')
http.createServer(function (req, res) {
    console.log('请求成功', req.url)
    const html = fs.readFileSync('index.html', 'utf-8')
    res.writeHead(200, {
        'Content-type': 'text/html'
    })
    res.end(html)
}).listen(8888)
console.log('server ok')