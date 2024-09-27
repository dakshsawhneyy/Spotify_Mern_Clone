import React, { useContext } from 'react'
import Navbar from './Navbar'   
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { PlayerContext } from '../context/PlayerContext'


const Home = () => {

    const { songsData,albumsData } = useContext(PlayerContext)

    return (
    <>
        <Navbar/>
        <div className='mb-4 my-8 mx-3'>
            <h1 className='text-2xl font-bold text-white'>Featured Charts</h1>
        </div>
        <div className='my-4 flex overflow-auto'>
            {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item._id} />))}
        </div>
        <div className='mb-4 my-8 mx-3'>
        <h1 className='text-2xl font-bold text-white'>Today's biggest hits</h1>
        </div>
        <div className='my-4 flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} image={item.image} id={item._id} />))}
        </div>
    </>
)
}

export default Home
