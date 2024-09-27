import React, { useEffect, useState } from 'react'
import { assets } from '../assets/admin-assets/assets';
import axios from 'axios';
import { url } from '../App';
import { toast } from 'react-toastify';

const AddSong = () => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(false);
    const [song, setSong] = useState(false);
    const [album, setAlbum] = useState("none")
    const [loading, setLoading] = useState(false);
    const [albumData, setAlbumData] = useState([]);

    const onSubmitHandle = async(e) => {
        e.preventDefault();         //When we submit button, It doesnot reload page

        setLoading(true)
        try {
            const formData = new FormData();    

            formData.append("name", name);
            formData.append("desc", desc);
            formData.append("image", image);
            formData.append("audio", song);
            formData.append("album", album);

            //Add url in axios.post of backend, so create URl in app.jsx
            const response = await axios.post(`${url}/api/song/add`,formData);      //Axios acts as an intermediary that sends HTTP requests from the frontend to the backend and processes the responses.Basically it connects frontend with backend

            //If status=success in backend, then reset all fields and provide status success
            if(response.data.success){
                toast.success("Song Added")
                setName("")
                setImage(false)
                setSong(false)
                setDesc("")
                setAlbum("none")
            }else{
                toast.error("Error")
            }

        } catch (error) {
            toast.error("Error Occured")
        }

        setLoading(false)
    }

    const loadAlbumData = async() => {
        try {
            const response = await axios.get(`${url}/api/album/list`)
            // console.log(response.data)
            if(response.data.success){
                setAlbumData(response.data.songs)
            }else{
                toast.error("Unable to load")
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(()=>{
        loadAlbumData();
    },[])

return loading ? (
    <div className='grid place-items-center min-h-[80vh]'>
        <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
            <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"> </span>
        </div>
    </div>
) : (
    <form onSubmit={onSubmitHandle} className='flex flex-col items-start gap-8 text-gray-600'>
        <div className='flex gap-8'>
            <div className='flex flex-col gap-5'>
                <p>Upload Song</p>
                <input type='file' onChange={(e) => setSong(e.target.files[0])} id='song' accept='audio/*' hidden/>
                <label htmlFor='song'>
                    <img src={song ? assets.upload_added : assets.upload_song} className='w-24 cursor-pointer' alt="" />
                </label>
            </div>
            <div className='flex flex-col gap-5'>
                <p>Upload Image</p>
                <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' accept='image/*' hidden/> 
                <label htmlFor='image'>
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
                </label>
            </div>
        </div>

        <div className='flex flex-col gap-2.5'>
            <p>Song name</p>
            <input value={name} onChange={(e)=> setName(e.target.value)} className='bg-transparent border-2 border-gray-400 border-solid outline-green-600 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' type='text'/>
        </div>
        <div className='flex flex-col gap-2.5 '>
            <p>Song Description</p>
            <input value={desc} onChange={(e)=> setDesc(e.target.value)} className='bg-transparent border-2 border-gray-400 border-solid outline-green-600 p-2.5 w-[max(40vw,250px)]' placeholder='Type here' type='text'/>
        </div>

        <div className='flex flex-col gap-2.5' >
            <p>Album</p>
            <select defaultValue={album} onChange={(e)=> setAlbum(e.target.value)} className='w-[100px] p-2 border-2 bg-transparent border-gray-400 border-solid outline-green-600'>
                <option>None</option>
                {albumData.map((item,index)=>{
                    return(
                        <option key={index} value={item.name}>{item.name}</option>
                )})}
            </select>
        </div>

        <button className='bg-black px-14 py-2.5 text-base text-white'>ADD</button>

    </form>
)
}

export default AddSong;

//(e) => setSong(e.target.files[0]): This is a small function that does something when the file is picked. e is the event of picking a file. setSong(e.target.files[0]) means "take the first file the user picked and save it as the song."
//URL.createObjectURL(image) is a JavaScript method used in React (or any web application) to create a temporary URL that represents the file object (in this case, image). This URL can then be used as a source for images, videos, or other resources.
// using value in React is like using the magic box because it always shows and updates the toy (or the text) inside. Using defaultValue is like using the regular box because it only shows the toy you first put in and doesn't update afterward
