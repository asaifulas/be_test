const express = require("express")
const axios = require('axios');

let app = express()
app.use(express.json())

// Frontpage
app.get('/', (req, res)=>{
    res.send('Back end Test for Ahmad Saifullah Arifin')
})

// First task, get top-post 
app.post('/top-post', (req, res)=>{

})

// Second task, search query
app.get('/search', (req, res)=>{

})

app.listen(3002)