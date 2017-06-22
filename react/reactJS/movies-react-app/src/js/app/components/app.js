import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from '../../movie/components/movies-list';

export default class AppComponent extends React.Component{
    render(){
        return (
            <div className="container">
                <MovieList></MovieList>
            </div>
        )
    }
}