const express = require("express")
const axios = require('axios');

let app = express()
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('test1')
})

app.listen(3002)