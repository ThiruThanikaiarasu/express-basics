const express = require('express')
const app = express()
const secondPage = require('./secondPage.js')

app.get('/', (request,response) =>{

    // console.log("Hello world")
    // response.sendStatus(500)
    // response.status(500).send( "Boring status")
    // response.status(500).json(
    // {
    //     "errorMessage": "Boring status",
    // }
    // )

    response.send("Get Router on Home Page")
})
app.use('/secondPage', secondPage)

app.listen(3500)
