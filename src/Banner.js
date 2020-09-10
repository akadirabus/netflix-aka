import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);

            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
            );
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "${base_url}${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "center center"
            }}

        >
            <div className="banner__fadeTop" />


            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.orginal_name}
                </h1>

                <div className="banner__button_div">

                    <button className="banner__button__play">
                        Oynat
                    </button>

                    <button className="banner__button">
                        <p className="banner__button__title">Daha Fazla Bilgi</p>
                    </button>
                </div>


                <h1 className="banner__description">{movie?.overview}</h1>
            </div>
            <div className="banner__fadeBottom" />
        </header>
    )
}

export default Banner
