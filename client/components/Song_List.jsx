const React = require('react');
const request = require('request');

class Song_List extends React.Component {
    constructor() {
        super();
        this.state = {
            songLink: ''
        }
    }

    fetch_song_list() {
        request('http://localhost:3000/users/api/spotify?task=search&query=twice',function(error,response,body){
            this.setState({
                songLink: JSON.parse(response.body)
            });
        });
    }

    componentDidMount() {
        this.fetch_song_list();
    }

    render() {
        return
        <div>
            {console.log(this.state.songLink.tracks.href)}
            <a href={ this.state.songLink.tracks.href } alt="spotify song link">{ this.state.songLink.tracks.href }</a>;
        </div> 
    }
}

module.exports = Song_List;