const http = require('node:http')
const fs = require('node:fs')
const url = require('node:url')

http.createServer((req, res) => {
    //Getting the pathname of url
    const q = url.parse(req.url, true)
    const pathname = q.pathname
}).listen()