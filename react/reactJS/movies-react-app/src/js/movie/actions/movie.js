import Constants from '../../constants';

let actionLikeMovie = (movie) => {
    return {
        type : Constants.ACTION_MOVIE_LIKE,
        payload : movie
    }
}

let actionDeleteMovie = (movie) => {
    return {
        type : Constants.ACTION_MOVIE_DELETE,
        payload : movie
    }
}

let MovieActions = {
    actionLikeMovie,
    actionDeleteMovie
};

export default MovieActions;