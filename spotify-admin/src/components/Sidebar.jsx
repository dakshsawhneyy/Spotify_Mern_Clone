import React from 'react'
import { assets } from '../assets/admin-assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
return (
    <>
    <div className='min-h-screen bg-[#003A10] pl-[4vw]'> 
        <img src={assets.logo} className='mt-5 sm:mr-12 lg:mr-16 lg:w-40 sm:w-24 md:w-28 hidden sm:block' alt="" />
        <img src={assets.spotify_logo} className='sm:hidden w-8 mt-5 block' alt="" />    
    
        <div className='flex flex-col gap-4 mt-10'>
            
            <NavLink to={"/addSong"} className='flex items-center gap-2.5 bg-white border-2 border-solid border-black p-2 text-gray-800 drop-shadow-[-4px_4px_#00FF5B] '>
            <img src={assets.add_song} className='w-5' alt="" />
            <p className='hidden sm:block font-semibold'>Add Song</p>
            </NavLink>
            
            <NavLink to={"/listSong"} className='flex items-center gap-2.5 bg-white border-2 border-solid border-black p-2 text-gray-800 drop-shadow-[-4px_4px_#00FF5B] '>
            <img src={assets.song_icon} className='w-5' alt="" />
            <p className='hidden sm:block font-semibold'>List Song</p>
            </NavLink>
            
            <NavLink to={"/addAlbum"} className='flex items-center gap-2.5 bg-white border-2 border-solid border-black p-2 text-gray-800 drop-shadow-[-4px_4px_#00FF5B] '>
            <img src={assets.add_album} className='w-5' alt="" />
            <p className='hidden sm:block font-semibold'>Add Album</p>
            </NavLink>
            
            <NavLink to={"/listAlbum"} className='flex items-center gap-2.5 bg-white border-2 border-solid border-black p-2 text-gray-800 drop-shadow-[-4px_4px_#00FF5B] '>
            <img src={assets.album_icon} className='w-5' alt="" />
            <p className='hidden sm:block font-semibold'>List Album</p>
            </NavLink>
        </div>
    </div>
    </>
)
}

export default Sidebar


//if we didnt put anything it will be of mobile as sm starts from 640 i.e. tab 