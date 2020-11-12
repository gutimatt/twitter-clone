// requires to set up our api 
const express = require('express');
// requires for the two apis to communicate
const axios = require('axios'); 
const app = express()
// requires the class 
const Twitter = require('./api/helpers/twitter');
const twitter = new Twitter();
const port = 3000
// requires the secure token file 
require('dotenv').config()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next();
})

app.get('/tweets', (req, res) => {
  const query = req.query.q;
  const count = req.query.count; 
  const maxId = req.query.max_id

  twitter.get(query, count, maxId).then((response) =>{
    res.status(200).send(response.data);
  }).catch((error)=>{
    console.log(error)
    res.status(400).send(error)
  }) 
})

app.listen(port, () => console.log(`twitter-app listening at http://localhost:${port}`))  