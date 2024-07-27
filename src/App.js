import React from "react";
import { useState,useEffect } from "react";
import './App.css'; 
import MovieCard from "./MovieCard";
//3cfd1c5d

const API_URL = 'http://www.omdbapi.com/?apikey=3cfd1c5d';    // static variable, will be used from inside of the component to gather data

const App = () => {
    const[movies, setMovies] = useState([]);
    const[searchTerm,setSearchTerm] = useState('');
    const searchMovies = async (title) => {               // asynchronous data , which means it takes some time to fetch these movies
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        }   
    useEffect(() => {
        searchMovies('Superman')
    },[]);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1024px-Magnifying_glass_icon.svg.png"
                   alt="Search Icon"
                   onClick={() => searchMovies(searchTerm)}   // calling the above api from here 



                />
            </div>
            {
                movies?.length > 0 
                ? (
                    <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie = {movie} />
                        ))}
                    </div>

                ) :(
                   <div className="empty">
                     <h1> No Movies Found</h1>
                    </div>
                )
            } 

            
        </div>

    );
}

export default App;