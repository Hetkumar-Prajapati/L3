const express = require('express')
// create an express objec. " new" keyword not use in js
const app = express()

//add http request handler
let hello = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('hello world')
    res.end()
}

let goodbye = (req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('goodbye world')
    res.end()
}

let index = (req,res)=>{
    if (req.url === '/'){
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('Home page')
    res.end()
    }
    else{
        res.writeHead(404)
        res.write('Not found')
        res.end()
    }
}

//route helps requests to our handler function
app.use('/hello',hello)     //map hello variable to hello url
app.use('/goodbye',goodbye)
app.use('/',index) // used at last after trying other urls

//start exress web server
app.listen(3000)
console.log('server bis running on 3000')