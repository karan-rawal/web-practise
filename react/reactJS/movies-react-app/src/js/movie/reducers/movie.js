import Constants from "../../constants";

let movies = [
    {
        id: "1",
        name: "Kal Ho Na Ho",
        director: "Karan Johar",
        liked: false
    },
    {
        id: "2",
        name: "Karan Arjun",
        director: "Rakesh Roshan",
        liked: false
    },
    {
        id: "3",
        name: "Sawariya",
        director: "Sanjay Bhansali",
        liked: false
    }
];

let initialState = {
    movies: movies
};

let handleLikeAction = function (state, movieToLike) {
    for (let i in state.movies) {
        if (state.movies[i].id == movieToLike.id) {
            state.movies[i].liked = !state.movies[i].liked;
            return state;
        }
    }
    return state;
}

let handleDeleteAction = function (state, movieToDelete) {
    for (let i in state.movies) {
        if (state.movies[i].id == movieToDelete.id) {
            state.movies.splice(i, 1)
            return state;
        }
    }
    return state;
}

let MovieReducer = (state = initialState, action) => {
    let tempState = {};
    Object.assign(tempState, state);
    switch (action.type) {
        case Constants.ACTION_MOVIE_DELETE:
            let movieToDelete = action.payload;
            return handleDeleteAction(tempState, movieToDelete);
        case Constants.ACTION_MOVIE_LIKE:
            let movieToLike = action.payload;
            return handleLikeAction(tempState, movieToLike);
    }
    return tempState;
};

export default MovieReducer;