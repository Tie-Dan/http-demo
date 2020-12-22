const http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'POST,PUT,DELETE',
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        'Access-Control-Max-Age': '-1' // s
    })
    res.end('123')
}).listen(8886)
console.log('server ok')