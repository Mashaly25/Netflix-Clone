import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className=' w-full h-screen'>
                <img className='absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/f466995e-adb6-41c3-a45c-4a5d507dd45d/EG-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/' />
                <div className=' bg-black/60 w-full h-screen fixed top-0 left-0 '>
                    <div className=' w-full fixed px-4 py-24 z-50'>
                        <div className=' bg-black/75 max-w-[450px] h-[600px] mx-auto text-white'>
                            <div className=' max-w-[350px] py-16 mx-auto'>
                                <h1 className='text-3xl font-bold'>Sign UP</h1>
                                <form onSubmit={handleSubmit} className='flex flex-col space-y-4 py-4'>
                                    <input onChange={(event)=>{setEmail(event.target.value)}} className=' p-1 bg-gray-700 rouded' placeholder='Email Address' autoComplete='email'></input>
                                    <input onChange={(event)=>{setPassword(event.target.value)}} type='password' className=' p-1 bg-gray-700 rouded' placeholder='Password' autoComplete='current-password'></input>
                                    <button className=' bg-red-600 py-3 text-lg font-bold rounded'>Sign UP</button>
                                    <div className='flex justify-between items-center text-sm text-gray-600'>
                                        <p><input className='mr-2' type='checkbox' />Remember me</p>
                                        <p>Need Help?</p>
                                    </div>
                                    <p className=' py-8'>
                                        <span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}
                                        <Link to='/login'>Login</Link>
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

export default SignUp