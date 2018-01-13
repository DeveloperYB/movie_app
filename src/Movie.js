import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import Rating from 'react-rating';
import './Movie.css';


function Movie({title, poster, genres, synopsis, rating}){
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster alt={title} poster={poster}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Rating">
                    <Rating 
                        start={0}  
                        stop={5} 
                        readonly 
                        initialRate={Number(rating/2)}
                    />
                </div>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MoviePoster({alt, poster}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    rating : PropTypes.number.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    alt : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

MovieGenre.propTypes ={
    genre : PropTypes.string.isRequired
}

export default Movie;