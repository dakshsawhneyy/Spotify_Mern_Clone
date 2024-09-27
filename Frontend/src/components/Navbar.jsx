import React from 'react'
import { assets } from '../assets/admin-assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
        const navigate = useNavigate();
return (
        <>
        <div className='flex p-3 w-full justify-between'>
                <div className='flex gap-2 items-center'>
                        <img src={assets.arrow_left} className='w-8 rounded-2xl bg-black p-2 cursor-pointer' onClick={()=>navigate(-1)} alt="" />
                        <img src={assets.arrow_right} className='w-8 rounded-2xl bg-black p-2 cursor-pointer' onClick={()=>navigate(1)} alt="" />
        </div>
                <div className='flex  gap-4 items-center'>
                        <button className='bg-white text-black rounded-3xl w-40 p-1 font-bold hidden md:block'>Explore Premium</button>
                        <button className='bg-black text-white rounded-3xl w-28 p-1 font-bold '>Install app</button>
                        <img src={assets.bell_icon} className='w-5 cursor-pointer' alt="" />
                        <img src={assets.spotify_logo} className='w-5 cursor-pointer' alt=""/>
                        </div>
        </div>
        <div className='flex gap-2 items-center mt-1 p-3'>
                <p className='bg-white text-black rounded-2xl px-3 py-1 cursor-pointer'>All</p>
                <p className='bg-[#353535] text-white rounded-2xl px-3 py-1 cursor-pointer'>Music</p>
                <p className='bg-[#353535] text-white rounded-2xl px-3 py-1 cursor-pointer'>Podcasts</p>
        </div>
        </>
)
}

export default Navbar
