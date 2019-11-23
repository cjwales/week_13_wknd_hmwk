import React, { Component } from 'react';

class MovieItem extends Component {
    render() {
        return (
            <div className="movie-item">
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default MovieItem;