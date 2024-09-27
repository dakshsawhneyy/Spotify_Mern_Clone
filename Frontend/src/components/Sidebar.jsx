import React from 'react'
import { assets } from '../assets/admin-assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    let navigate = useNavigate();
return (
    <div className='lg:flex h-full flex-col w-[25%] p-2 text-white hidden'>
        <div className='flex h-[20%] bg-[#121212] flex-col rounded'>
            <div className='w-24 m-4'>
                <img src={assets.logo} alt="" />
            </div>
            <div className='flex pl-4'>
                <img src={assets.home_icon} className='w-6' alt="" />
                <p className='ml-5 font-bold cursor-pointer' onClick={()=> navigate("/")}>Home</p>
            </div>
            <div className='flex p-5 pl-4'>
                <img src={assets.search_icon} className='w-6' alt="" />
                <p className='ml-5 font-bold cursor-pointer'>Search</p>
            </div>
        </div>

        <div className='bg-[#121212] h-[80%] rounded flex flex-col mt-2 text-white p-2 '>
            <div className='flex p-4 justify-between'>
                <div className='flex'>
                <img src={assets.stack_icon} className='w-6' alt="" />
                <p className='ml-3 font-bold'>Your Library</p>
                </div>
                <div className='flex gap-5'>
                <button className=''><img src={assets.plus_icon} className='w-4 box-plus' alt="" /></button>
                <button className=''><img src={assets.arrow_icon} className='w-4 box-plus' alt="" /></button>
                </div>
            </div>
            <div className='w-[100%] rounded mt-6 bg-[#1F1F1F] h-[25%] p-4 '>
                <p className='font-bold'>Create your first playlist</p>
                <p className='mt-2 text-sm font-semibold'>It's easy,we'll help you</p>
                <button className='bg-white text-black p-1 w-36 font-bold rounded-3xl mt-5 box'>Create playlist</button>
            </div>
            <div className='w-[100%] rounded mt-6 bg-[#1F1F1F] h-[30%] p-4'>
                <p className='font-bold text-sm'>Let's find some podcasts to follow</p>
                <p className='mt-2 text-sm font-semibold'>We'll keep you updated on new episodes</p>
                <button className='bg-white text-black p-1 w-36 font-bold rounded-3xl mt-5 box'>Browse podcasts</button>
            </div>
        </div>
    </div>
)
}

export default Sidebar
