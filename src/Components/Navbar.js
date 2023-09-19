import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-between items-center p-4 z-[100] absolute w-full'>
            <Link to='/'>
                <h1 className='text-red-600 text-4xl cursor-pointer'>NETFLIX</h1>
            </Link>

            <div>
                <Link to='/login'>
                    <button className=' text-white pr-4'>Login</button>
                </Link>
                <Link to='/signup'>
                <button className=' text-white bg-red-600 px-6 py-2 rounded pl-6'>Sign Up</button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar