import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Request'

function Main() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(requests.requestPopular).then((request) => { setMovies(request.data.results) })
    }, [])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    //console.log(movie)

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    return (
        <div className=' w-full h-[550px] text-white'>
            <div className=' w-full h-full '>
                <div className=' bg-gradient-to-r from-black w-full h-[550px] absolute'></div>
                <img className=' w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} ></img>
                <div className=' absolute w-full top-[20%] p-5 md:p-8'>
                    <h1 className=' font-bold text-3xl md:text-5xl '>{movie?.title}</h1>
                    <div className=' my-5'>
                        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                        <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
                    </div>
                        <p className=' text-sm'>{movie?.release_date}</p>
                        <p className=' text-gray-200 w-full md:w-2/3 lg:w-1/3'>{truncateString(movie?.overview,150)}</p>
                </div>
            </div>

        </div>
    )
}

export default Main