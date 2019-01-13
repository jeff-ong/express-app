require('dotenv').config();
const Spotify = require('node-spotify-api');
const spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

const spotify_util = async function(req_obj){
    
    if (req_obj.task === null ||
        req_obj.task === undefined ||
        req_obj.task === '') {
        return 'Missing params: {query, task}';
    }

    switch(req_obj.task) {
        case 'search':
            if (req_obj.query === null ||
                req_obj.query === undefined ||
                req_obj.query === '') {
                return 'Please specify your seacrh in the \"query\" param.';
            }
            return await spotify.search({ type: 'track', query: req_obj.query })
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
        case 'categories':
            const query_str = req_obj.query ? 'https://api.spotify.com/v1/browse/categories/'+req_obj.query: 'https://api.spotify.com/v1/browse/categories/';
            return await spotify.request(query_str)
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
