import React, { useEffect, useState } from 'react'
import { url } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const ListAlbum = () => {
    const [data, setData] = useState([])

    const fetchAlbums = async() => {
        try {
            const response = await axios.get(`${url}/api/album/list`)
            // console.log(response)

            if(response.data.success){
                setData(response.data.songs)
            }
        } catch (error) {
            toast.error("Error occured")
        }
    }

    useEffect(()=>{
        fetchAlbums();
    },[])

    const removeSong = async(id) => {
        try {
            const response = await axios.delete(`${url}/api/album/delete`, {data:{id}})
            if(response.data.success){
                toast.warn("Song Removed")
                await fetchAlbums();
            }
        } catch (error) {
            toast.error("Error Occured")
        }
    }

return (
    <div className='flex flex-col gap-1'>
        <b>All Albums</b>
        <br/>
        <div>
        <div className='grid grid-cols-[0.5fr_1fr_1.5fr_1fr_0.5fr] items-center bg-gray-100 p-2 border-2 border-gray-300 mr-5'>
            <b>Image</b>
            <b>Name</b> 
            <b>Description</b>
            <b>Album Colour</b>
            <b>Action</b>
        </div>
        {data.map((item,index)=>{
            return(
                <div className='p-2 grid grid-cols-[0.5fr_1fr_1.5fr_1fr_0.5fr] items-center border border-gray-300 mr-5' key={index}>
                    <img src={item.image} className='w-12' alt="" />
                    <p>{item.name}</p>
                    <p>{item.desc}</p>
                    <input type="color" value={item.bgColour}/>
                    <p onClick={()=> removeSong(item._id)} className='bg-red-500 text-white px-2 cursor-pointer text-center py-2 rounded '>Delete Album</p>
                </div>
            )
        })}
        </div>
    </div>
)
}

export default ListAlbum;
