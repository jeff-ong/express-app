const React = require('react');
const ReactDOM = require('react-dom');
const Song_List = require('./components/Song_List');

class App extends React.Component {
    render() {
        return <Song_List></Song_List>;
    }
}

ReactDOM.render(<App />,document.getElementById('app'));