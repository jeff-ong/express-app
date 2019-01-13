require('dotenv').config();

const Spotify = require('node-spotify-api');
 
const spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

const spotify_util = async function(task,query){

    if (task === null ||
        task === undefined ||
        task === '') {
        return 'Missing params: {query, task}';
    }

    switch(task) {
        case 'search':
            if (query === null ||
                query === undefined ||
                query === '') {
                return 'Please specify your seacrh in the \"query\" param.';
            }
            return await spotify.search({ type: 'track', query: query })
                .then(function(res){
                    return res;
                })
                .catch(function(err){
                    return err;
                });
            break;
        case 'recommendation':
            return await spotify.request('https://api.spotify.com/v1/recommendations/available-genre-seeds')
                .then(function(res) {
                    return res;
                })
                .catch(function(err) {
                    return err;
                });
            break;
        default:
            return 'param task cannot be empty';
    }
}

module.exports = spotify_util;
