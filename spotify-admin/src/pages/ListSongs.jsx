import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../App'
import { toast } from 'react-toastify'


const ListSongs = () => {

    const [data, setData] = useState([])

    const fetchSongs = async() => {
        try {
            const response = await axios.get(`${url}/api/song/list`)
            // console.log(response.data)

            if(response.data.success){
                setData(response.data.songs)
            }
        } catch (error) {
            toast.error("Error Occured")
        }
        //NOW we can display data in return()
    }

    //to make fetchSongs function execute only when page is loaded //? Use useEffect loads data without reloading the page
    useEffect(() => {
        fetchSongs();
    },[])

    const removeSong = async(id) => {
        try {
            const response = await axios.delete(`${url}/api/song/delete`,{ data: { id } })  //axios.delete expects the request body to be in the data property of the second argument.
            
            if(response.data.success){
                toast.success(response.data.message)
                await fetchSongs();
            }
        } catch (error) {
            toast.error(error)
        }
    }

return (
    <div className=''>
        <p>All Songs </p>
        <div className=''>
            <div className='sm:grid hidden grid-cols-[0.5fr_1fr_1.5fr_1fr_0.5fr] items-center gap-2 border-2 border-gray-300 bg-gray-100 p-2 mr-5 mt-8'>
                <b>Image</b>
                <b>Name</b>
                <b>Album</b>
                <b>Duration</b>
                <b>Action</b>
            </div>
            {data.map((item, index) => {
                return(
                    <div key={index} className='items-center grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_1.5fr_1fr_0.5fr] gap-2.5 border border-gray-300 border-t-0 mr-5 p-3'>
                        <img src={item.image} className='w-12' alt="" />
                        <p>{item.name}</p>
                        <p>{item.album}</p>
                        <p>{item.duration}</p>
                        <p onClick={() => removeSong(item._id)} className='bg-red-500 text-white px-2 cursor-pointer text-center py-2 rounded'>Delete Song</p>
                    </div>
                )
            })}
        </div>
    </div>
)
}

export default ListSongs;
