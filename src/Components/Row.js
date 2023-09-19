import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import Movies from './Movies';

function Row({ title, fetchURL, rowID }) {

    const [movies, setMovies] = useState([])
    const [like, useLike] = useState(false)

    useEffect(() => {
        axios.get(fetchURL).then((response) => { setMovies(response.data.results) })
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <h2 className=' text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={50} className=' left-0 bg-white rounded-full absolute z-20 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' />
                <div id={`slider${rowID}`} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <Movies item={item} key={id} />
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={50} className=' right-0 bg-white rounded-full absolute z-20 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block' />
            </div>
        </>
    )
}

export default Row