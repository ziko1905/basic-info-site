const http = require('node:http')
const fs = require('node:fs')
const url = require('node:url')

http.createServer((req, res) => {
    //Getting the pathname of url
    const q = url.parse(req.url, true)
    const pathname = '.' + q.pathname
    if (pathname == "./") {
        fs.readFile("./index.html", (err, data) => {
            if (err) throw err
            res.writeHead(200, { 'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }
}).listen(8080)