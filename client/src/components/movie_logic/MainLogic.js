import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../App.css';
import ListOfMovie from './ListOfMovie';
import MovieHeading from './MovieHeading';
import SearchMovie from './SearchMovie';
import Add_To_Playlist from './Add_To_Playlist';
import RemoveFromPlaylist from './RemoveFromPlaylist';

const Main_Logic = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchKey, setSearchValue] = useState('');

	const getMovieRequest = async (searchKey) => {
		const url = `http://www.omdbapi.com/?s=${searchKey}&apikey=59e5d534`;

		const response = await fetch(url);
		const responseJson = await response.json();
       /**only set the movie when we get some search value back,empty string may cause error */
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchKey);
	}, [searchKey]);
	/**whenever search value changes ,I want to call get movie request */

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieHeading heading='List Of Movies' />
				<SearchMovie searchKey={searchKey} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<ListOfMovie
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={Add_To_Playlist}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieHeading heading='Created Playlist' />
			</div>
			<div className='row'>
				<ListOfMovie
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFromPlaylist}
				/>
			</div>
		</div>
	);
};

export default Main_Logic;
