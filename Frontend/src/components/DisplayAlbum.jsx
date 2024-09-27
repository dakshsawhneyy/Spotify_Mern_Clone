import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
// import { albumsData, assets, songsData } from '../assets/admin-assets/assets';
import { assets} from '../assets/admin-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = ({album}) => {
    //!concept
    const {id} = useParams();   // helps you get information from the URL of your web page. //this id is used in router
    // const albumData = albumsData[id]     //And this id is bought from albumData and equals with upper id

    //Making setState to change state of albums
    const [albumData, setAlbumData] = useState(null)
    const { playWithId,albumsData,songsData } = useContext(PlayerContext)

    useEffect(()=>{
        albumsData.map((item)=>{
            if(item._id === id){
                setAlbumData(item)
            }
        })
    },[])

return albumData ? (
    <>
    <div className=''>
        <Navbar/>
        <div className=' p-2 px-3 rounded text-white flex flex-col md:flex-row'>
            <img src={albumData.image} className='rounded w-48' alt="" />
            <div className='flex flex-col ml-4'>
                <p className=' font-semibold'>Playlist</p>
                <h2 className='mt-2 text-5xl md:text-7xl font-extrabold'>{albumData.name}</h2>
                <h4 className='text-sm mt-3'>{albumData.desc}</h4>
                <div className='mt-5'>
                    <p className='flex gap-1'>
                    <img src={assets.spotify_logo} className='w-6 font-bold' alt="" />
                    <b> Spotify</b>
                    • 1,23,00,600 likes
                    <b>• 50 songs,</b>
                    about 3 hr
                    • 1 new entry
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className='grid sm:grid-cols-4 grid-cols-3 pl-3 text-[#afafaf] mt-4'>
            <p className=''> <b className='mr-4'>#</b> Title </p>
            <p className=' '>Album</p>
            <p className='hidden md:block'>Date added</p>
            <img src={assets.clock_icon} className='w-4 m-auto' alt="" />
    </div>
    <hr className='opacity-15 mt-3 h-1'></hr>
    {/* //Adding filter to filter songs based on albums */}
    {songsData.filter((item)=> item.album === album.name).map((item,index)=>(
        <div onClick={() => playWithId(item._id)} className='grid sm:grid-cols-4 grid-cols-3 cursor-pointer text-[#afafaf] gap-2 p-3 hover:bg-[#2B2A2A] items-center pl-3' key={index}>
            <p className=''>
                <b className='mr-6'>{index+1}</b>
                <img src={item.image} className='w-8 rounded mr-5 inline' alt="" />
                <p className='inline'>{item.name}</p>
            </p>
                <p className=''>{albumData.name}</p>
                <p className='md:block hidden'>5 days ago</p>
                <p className='text-center'>{item.duration}</p>
        </div>
    ))}
    </>
) : null
}

export default DisplayAlbum
