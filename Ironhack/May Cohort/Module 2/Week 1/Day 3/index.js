const express = require('express')

const app = express()

app.use(express.static('public'))

console.log("Hello")
//if I get a GET request

//takes 2 arguements
// 1. the route
// 2. function that will get executed if we get a request on this route
app.get('/',(request,response)=>{
    console.log("Hello 2")
    //send method only sends back strings
    //sendFile method sends back a whole HTML file
    response.sendFile(__dirname + '/views/homepage.html')
})

app.get('/about-me',(req,res)=>{
    res.sendFile(__dirname + '/views/about-me.html')
})

//exercise 1
// create a route in your application for an about me page
//the route needs to be about-me
//your html file needs to be in a views folder

app.listen(3000,()=>{console.log("server is running")})


//stop the server with control + C