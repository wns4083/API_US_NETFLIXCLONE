
import React, { useEffect, useState } from 'react'
import axiosSet from '../api/aixosSet';
import requests from '../api/Request';

import './Banner.css';

function Banner() {
    const [movie, setMovie] =useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axiosSet.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    },[])
    console.log("banners data : " , movie )

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." :str;
    }
  return (
    <section className='banner_container'
         style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center cencer"
         }}
    >
        <div className='banner_contents'>
            <h2>
                {movie?.title || movie?.name || movie?.original_name}
            </h2>
            <div className='banner_buttons'>
                <button className='banner_button'>
                    Play
                </button>
                <button className='banner_button'>
                    My List
                </button>
            </div>
            <div className='banner_info'>
                <h2 className='banner_description'>
                    {truncate(movie?.overview, 150)}
                </h2>
            </div>
        </div>
        <span className='banner--fadeBottom'></span>
    </section>
  )
}

export default Banner