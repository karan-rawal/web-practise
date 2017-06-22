import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './movie';
import { connect } from 'react-redux';
import MovieActions from '../actions/movie';

class MovieList extends React.Component {
    render() {
        return (
            <div>
                {this.props.state.movies.map((value, index) => {
                    return <Movie onDeleteClick={this.props.deleteMovie} onLikeClick={this.props.likeMovie} key={index} movie={value}></Movie>
                })}
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.movieReducer
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteMovie: (movie) => { dispatch(MovieActions.actionDeleteMovie(movie)) },
        likeMovie: (movie) => { dispatch(MovieActions.actionLikeMovie(movie)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);