import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
    return (
        <>
        <div className=' w-full h-screen'>
            <img className='absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/f466995e-adb6-41c3-a45c-4a5d507dd45d/EG-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/' />
            <div className=' bg-black/60 w-full h-screen fixed top-0 left-0 '>
                <div className=' w-full fixed px-4 py-24 z-50'>
                    <div className=' bg-black/75 max-w-[450px] h-[600px] mx-auto text-white'>
                        <div className=' max-w-[350px] py-16 mx-auto'>
                            <h1 className='text-3xl font-bold'>Login</h1>
                            <form className='flex flex-col space-y-4 py-4'>
                                <input className=' p-1 bg-gray-700 rouded' placeholder='Email Address' autoComplete='email'></input>
                                <input className=' p-1 bg-gray-700 rouded' placeholder='Password' autoComplete='current-password' type='password'></input>
                                <button className=' bg-red-600 py-3 text-lg font-bold rounded'>Login</button>
                                <div className='flex justify-between items-center text-sm text-gray-600'>
                                    <p><input className='mr-2' type='checkbox' />Remember me</p>
                                    <p>Need Help?</p>
                                </div>
                                <p className=' py-8'>
                                    <span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
                                    <Link to='/signup'>Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}

export default LogIn