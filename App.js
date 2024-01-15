import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends Component {
    state = {
        photos: []
    };

    componentDidMount() {
        Axios.get('http://localhost:3000/').then(response => {
        this.setState({
            photos: response.data
        });
        });
    }

    render() {
        return (
        <>
            <h1>Flickr Images</h1>
            <ul>
            {this.state.photos.map(photo => (
                <li key={photo.id}>
                <img src={photo.url} />
                <p>{photo.title}</p>
                </li>
            ))}
            </ul>
        </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
