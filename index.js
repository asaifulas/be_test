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
        
        // get posts data 
        axios.get(post, config).then(datPost =>{
            // combine both posts n comment data 
            const combine = datPost.data.map(data => {
                return {
                    post_id:data.id,
                    post_title:data.title,
                    post_body:data.body,
                    total_number_of_comments: noOfComment.filter(({id}) => data.id == id)[0].quantity
                }
            })

            // sort top post 
            const sortedTopPost = combine.sort((a,b)=>{
                return b.quantity - a.quantity
            })
            res.send(sortedTopPost)
        })
    })

})

// Second task, search query
app.get('/search', (req, res)=>{

})

app.listen(3002)