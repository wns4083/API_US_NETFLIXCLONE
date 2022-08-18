import movieTrailer from 'movie-trailer';
import React,{useState, useEffect} from 'react'
import YouTube from 'react-youtube';
import axiosSet from '../api/aixosSet';


import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import './Row.css';




const base_url="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] =useState("");

    const [currentIdx, setCurrentIdx] =useState(0);
    const lenghts = movies.length;
   


    useEffect(()=>{
        async function fetchData(){
            const request = await axiosSet.get(fetchUrl);
            
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
     console.log(movies);
    /*trailer settings */
    const opts ={
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }
    const handleClick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl('');
        }else{
            movieTrailer(movie?.name || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error)=>console.log(error))
        }
    }

    const Previous= ()=>{
        if(Math.abs(currentIdx)===lenghts-1){
            return setCurrentIdx(0);
        }else{
            setCurrentIdx(currentIdx+1);
        }
        console.log(currentIdx);
        
    }
    const Next = ()=>{
        if(Math.abs(currentIdx)===lenghts-1){
            return setCurrentIdx(0);
        }else{
            setCurrentIdx(currentIdx-1);
           console.log(currentIdx); 
        }
    }
  return (
    <div className='row_container'>
        <h2>{title}</h2>
        <div className='row_sliders' >
            <div className='row_posters' style={{transform: `translate(${currentIdx*300}px)`}}>
                {movies.map(movie=>(
                    <div className='poster'>
                    <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}` }
                        onClick={()=>handleClick(movie)}
                    />
                    <h2 className='infos'>{movie.name}</h2>
                    </div>
                ))}
            </div>

        </div>
        <div className='btn_controller'>
            <button onClick={Previous}><FaArrowAltCircleLeft/></button>
            <button onClick={Next}><FaArrowAltCircleRight/></button>
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row