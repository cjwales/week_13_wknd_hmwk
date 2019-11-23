import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div className="movie-item">
                <li>
                <a href={this.props.url}><h4>{this.props.name}</h4></a>
                </li>
            </div>
        );
    }
}

export default MovieItem;