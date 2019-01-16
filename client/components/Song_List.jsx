const React = require('react');
const fetch = require('node-fetch');

class Song_List extends React.Component {
    constructor() {
        super();
        this.state = {
            songLink: '...loading'
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/users/api/spotify?task=search&query=twice')
            .then(res=>res.json())
            .then(data=>this.setState({songLink: data})); 
    }

    render() {
        return <div>{ JSON.stringify(this.state.songLink.tracks) }</div> 
    }
}

module.exports = Song_List;