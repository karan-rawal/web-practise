import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import { Col } from 'react-bootstrap';
import Favourite from 'material-ui/svg-icons/action/favorite';
import Delete from 'material-ui/svg-icons/action/delete';
import './movie.scss';

export default class Movie extends React.Component {

    handleLikeClick(){
        console.log("Like clicked.");
        this.props.onLikeClick(this.props.movie);
    }

    handleDeleteClick(){
        console.log("Delete clicked.");
        this.props.onDeleteClick(this.props.movie);
    }

    render() {
        return (
            <Col className="movie" lg={8} lgOffset={2}>
                <Card className="movie-card">
                    <CardHeader
                        title={this.props.movie.name}
                        subtitle={"Directed By " + this.props.movie.director}
                        actAsExpander={false}
                        showExpandableButton={false}>
                    </CardHeader>
                    <CardMedia>
                        <img src="http://lorempixel.com/400/200/" alt="" />
                    </CardMedia>
                    <CardActions className="movie-actions">
                        <Favourite onClick={this.handleLikeClick.bind(this)} className="movie-action" color={this.props.movie.liked? '#ff0000' : '#000000'}></Favourite>
                        <Delete onClick={this.handleDeleteClick.bind(this)} className="movie-action" color={'#ff0000'}></Delete>
                    </CardActions>
                </Card>
            </Col>
        );
    }
}