//Making display component  for making routes then inside it making Home inside it And then making components like navbar, AlbumData, SongData inside it 

import React, { useContext, useEffect, useRef } from 'react'
import Home from './Home'
import { Routes,Route, useLocation } from 'react-router-dom'
import DisplayAlbum from './DisplayAlbum'
// import { albumsData } from '../assets/admin-assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Display = () => {
    const {albumsData} = useContext(PlayerContext)
    
    //!rendering color from id in url..If album is present in url then fetching id and setting background color to individual album
    const displayRef = useRef();       //Diff b/w state and ref is that ref doesn't change ur component when it gets changed. Then using it in routes as ref // Basically useRef is used to render object.. It only renders one time and doesnot reRender the object... SO basiclly useRef is an object and that object has a .current value. To reRender things we use //? useState hook
    const location = useLocation();     //use to retrieve location of element in pathname
    const albumItem = location.pathname.includes("album")      //if album is there in url, then only proceed
    // const albumId = albumItem ? location.pathname.slice(-1) : ""      //slice(-1) is used to get last element
    const albumId = albumItem ? location.pathname.split('/').pop() : ""      //New line for spotify-admin //If albumItem exists: albumId will be set to the last segment of the current URL path (e.g., "123" from /albums/123).
    // const bgColor = albumsData[Number(albumId)].bgColor       // id is in form of string in url, so converting it in number then alloting background color from assets
    const bgColor =  albumItem && albumItem.length>0 ? albumsData.find((x)=> (x._id == albumId)).bgColor : "#121212" //sbse phle check url m album h ya nhi phir dekho agr albumsData mei esi id h jo albumid se match kare phir .bgColor uske bgcolour ko accesss kr lega

    useEffect(()=>{         //It is used to change effect of the components
        if(albumItem){
            displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`         //useRef includes current variables inside it which has to be included
        }else{
            displayRef.current.style.background = `#121212`
        }
    })

return (
    <div ref={displayRef} className='w-[100%] lg-[75%] p-2 m-2 ml-0 px-6 bg-[#121212] rounded overflow-auto'>
            {albumsData.length > 0} ?
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((x)=> (x._id == albumId))}/>} ></Route>     //Making this route for fetching id in url and displaying specific album when album is clicked
            </Routes> : null
    </div>
)
}

export default Display