const axios = require('axios'); 
const URL = 'https://api.twitter.com/1.1/search/tweets.json';

// this calls the twitter api and returns it to ours 
class Twitter {
    get = (query, count, maxId) => {
        return axios.get(URL, {
            params: {
                q: query,
                count: count,
                tweet_mode: "extended",
                max_id: maxId
            },
            headers: {
                // gets the token from a secure file 
                'Authorization': `Bearer ${process.env.TWITTER_API_TOKEN}`
            },
        })
    }
}

module.exports = Twitter;


 
