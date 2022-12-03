const express = require("express")
const axios = require('axios');

let app = express()
app.use(express.json())

// API source
const comment = "https://jsonplaceholder.typicode.com/comments";
const post = "https://jsonplaceholder.typicode.com/posts";
const config = { headers: { Accept: 'application/json', 'Accept-Encoding': 'identity' }}

// function 
// get the number of comment for each post 
const getCommentNumber = dataIn => {
    const res = [];
    
    dataIn.forEach(data => {
       if (!this[data.postId]) {

          this[data.postId] = {
             id: data.postId, quantity: 0
          };
          res.push(this[data.postId]);

       };
       this[data.postId].quantity += 1;
    }, {});
    return res;
 }

// Frontpage
app.get('/', (req, res)=>{
    res.send('Back end Test for Ahmad Saifullah Arifin')
})

// First task, get top-post 
app.post('/top-post', (req, res)=>{

    // get comment data 
    axios.get(comment, config).then(datCom => {
        const noOfComment = getCommentNumber(datCom.data)
        
        
    })

})

// Second task, search query
app.get('/search', (req, res)=>{

})

app.listen(3002)