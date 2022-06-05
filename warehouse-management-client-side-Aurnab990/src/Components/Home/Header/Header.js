import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handlelogOut = () =>{
        signOut(auth);
    }
    return (
        <div className=''>
            <div className='flex justify-between bg-sky-700' >
            <div className='flex '>
            <div className=' bg-sky-700 '>
                <img className='w-20' href='/home' src="bookLogo-removebg-preview.png" alt="" />

            </div>
            <div className='mb:mt-3'>
                <Link className='text-amber-300 font-bold text-3xl' to='/home'>Books House</Link>
                
            </div>

            </div>

            <div className='p-4 bg-sky-700 text-white bg-origin-padding mb:p-6 border-6 text-right space-x-9  text-xl font-Poppins'>
                
                <Link className=' hover:bg-blue-50 hover:text-black hover:p-4 hover:rounded' to='/home'>Home</Link>
                <Link className=' hover:bg-blue-50 hover:text-black hover:p-4 hover:rounded' to='/blog'>Blog</Link>
                <Link className=' hover:bg-blue-50 hover:text-black hover:p-4 hover:rounded' to='/about'>Pricing</Link>
                <Link className=' hover:bg-blue-50 hover:text-black hover:p-4 hover:rounded' to='/additems'>Add-items</Link>
                <Link className=' hover:bg-blue-50 hover:text-black hover:p-4 hover:rounded' to='/myitems'>My-Items</Link>
                <Link className=' hover:bg-blue-50 hover:text-black hover:p-4 hover:rounded' to='/inventories'>Inventories</Link>
                {
                    user?
                    <Link onClick={handlelogOut} className=' bg-red-300 p-4 rounded-xl font-bold px-5 hover:bg-blue-50 hover:text-red -500 hover:p-4 hover:rounded' to='/login'>Log Out</Link>
                    :
                    <Link className=' bg-red-300 p-4 rounded-xl font-bold px-5 hover:bg-blue-50 hover:text-black hover:p-4 hover:rounded' to='/login'>Log in</Link>
                }
            </div>
        </div>
        </div>
    );
};

export default Header;
