const express = require('express')
// create an express objec. " new" keyword not use in js
const app = express()

//add http request handler
let hello= (req,res)=>{
    res.writeHead(200)
    res.write('hello world')
    res.end()
}

//route helps requests to our handler function
app.use(hello)

//start exress web server
app.lison(3000)
console.log('server bis running on 3000')