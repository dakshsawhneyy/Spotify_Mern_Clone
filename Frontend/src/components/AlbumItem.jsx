import React from 'react'
import { useNavigate } from 'react-router-dom'

//!Concept sending props
const AlbumItem = ({name,desc,id,image}) => {

    const navigate = useNavigate();

return (
    <div className='min-w-[180px] p-2 px-3 cursor-pointer rounded hover:bg-[#ffffff26] text-white' onClick={()=>navigate(`/album/${id}`)}>
        <img src={image} className='rounded' alt="" />
        <p className='mt-2 font-semibold'>{name}</p>
        <p className='text-sm'>{desc.slice(0,38)}</p>
    </div>
)
}

export default AlbumItem
