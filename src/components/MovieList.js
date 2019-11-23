import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
    render() {
        const movieNodes = this.props.data.map(movie => {
            return (
            <MovieItem id={movie.id} name={movie.name} url={movie.url}>{movie.name}</MovieItem>
            )
        })
        return (
            <div className="movie-list">
                {movieNodes}
            </div>
        );
    }
}

export default MovieList;