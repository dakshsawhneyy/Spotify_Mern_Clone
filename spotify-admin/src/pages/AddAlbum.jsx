import React, { useState } from 'react'
import { assets } from '../assets/admin-assets/assets';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddAlbum = () => {

    const [image, setImage] = useState(false)
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [color, setColor] = useState("#ffffff")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()

        setLoading(true)
        try {
            const formData = new FormData()

            formData.append("name",name)
            formData.append("desc",desc)
            formData.append("image",image)
            formData.append("bgColour", color)

            //Sending data on backend through axios
            const response = await axios.post(`${url}/api/album/add`, formData)   //secod valiable in axios means data which gets sent to backend so dont forget to write it
            if(response.data.success){
                toast.success("Album Added")
                setName("")
                setDesc("")
                setColor("#ffffff")
                setImage(false)
            }else{
                toast.error(error)
            }

        } catch (error) {
            toast.error(error)
        }
        setLoading(false)
    }

return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
        <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
            <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"> </span>
        </div>
    </div>
) : (
    <form onSubmit={handleSubmit} className='flex flex-col gap-8'>
        <div className='flex flex-col gap-5'>
            <p className=''>Upload Image</p>
            <input onChange={(e)=> setImage(e.target.files[0])} type='file' accept='image/*' id='image' hidden />
            <label htmlFor="image"><img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" /></label>
        </div>
        <div className='flex flex-col gap-3 text-[#4B5563]'>
            <p className=''>Album Name</p>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)} className='w-[max(40vw,250px)] p-2 bg-transparent outline-green-600 border-[#9CA3AF] border-2 ' placeholder='Type here' />
        </div>
        <div className='flex flex-col gap-3 text-[#4B5563]'>
            <p className=''>Album Description</p>
            <input type='text' value={desc} onChange={(e)=> setDesc(e.target.value)} className='w-[max(40vw,250px)] p-2 bg-transparent outline-green-600 border-[#9CA3AF] border-2 ' placeholder='Type here' />
        </div>
        <div className='flex flex-col gap-1 text-[#4B5563]'>
            <p className=''>Background Colour</p>
            <input onChange={(e)=> setColor(e.target.value)} value={color} type='color' />
        </div>

        <button className='w-28 py-2 bg-black text-white rounded'>Add Album</button>
    </form>
)
}

export default AddAlbum;
