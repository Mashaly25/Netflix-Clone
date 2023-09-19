import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Movies({item}) {
    const [like, useLike] = useState(false)

    return (
        <div className=' w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className=' block w-full h-auto' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>
            <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100' >
                <p className=' whitespace-normal text-white flex justify-center items-center text-center h-full text-xs md:text-sm font-bold'>{item?.title}</p>
                <p>{like ? <FaHeart className=' absolute text-gray-300 top-4 left-4' /> : <FaRegHeart className=' absolute text-gray-300 top-4 left-4' />}</p>
            </div>
        </div>
    )
}

export default Movies