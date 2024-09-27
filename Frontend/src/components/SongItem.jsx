import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({name,desc,id,image}) => {
    const { playWithId } = useContext(PlayerContext)
    //Exporting it in Home component for sending it as props
return (
    <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 cursor-pointer rounded hover:bg-[#ffffff26] text-white'>
        <img src={image} className='rounded' alt="" />
        <p className='mt-2 font-semibold'>{name}</p>
        <p className='text-sm'>{desc}</p>
    </div>
)
}

export default SongItem
