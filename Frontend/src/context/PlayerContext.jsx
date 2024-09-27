import React, { createContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../assets/admin-assets/assets';
import axios from 'axios'

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const url = 'http://localhost:5000';

    const [songsData, setsongsData] = useState([])
    const [albumsData, setalbumsData] = useState([])

    //Making States to reRender changed objects
    // Solution 1: Initialize with an empty object if songsData[0] is undefined
    const [track, setTrack] = useState(songsData[0] || {})    //Whenever we load project, Our initial track will be first song
    const [playStatus, setPlayStatus] = useState(false) //Whenever project gets loaded, song playStatus will be false //Making this for  play and pause status
    const [time, setTime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = () => {
        audioRef.current.play() //audioRef.current.play() is a method call used to play an audio element that is referenced by audioRef
        setPlayStatus(true)
    }
    const pause = () => {
        audioRef.current.pause() //audioRef.current.pause() is a method call used to pause an audio element that is referenced by audioRef
        setPlayStatus(false)
    }
    // const playWithId = async(id) => {
    //     await setTrack(songsData[id])
    //     await audioRef.current.play()
    //     setPlayStatus(true)
    // }
    const playWithId = async(id) => {
        await songsData.map((item)=>{
            if(id===item._id){
                setTrack(item);
            }
        })
        await audioRef.current.play()
        setPlayStatus(true)
    }
    // const previous = async() => {
    //     if (track.id > 0){
    //         await setTrack(songsData[track.id - 1])
    //         await audioRef.current.play()
    //         setPlayStatus(true)
    //     }
    // }
    const previous = async() => {
        songsData.map(async (item,index) => {
            if(track._id === item._id && index>0){
                await setTrack(songsData[index-1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        })
    }
    // const next = async() => {
    //     if (track.id < songsData.length - 1){
    //         await setTrack(songsData[track.id + 1])
    //         await audioRef.current.play()
    //         setPlayStatus(true)
    //     }
    // }
    const next = async() => {
        songsData.map(async (item,index) => {
            if(track._id === item._id && index<songsData.length){
                await setTrack(songsData[index+1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        })
    }

    //e is represented as event when Bar is clicked
    const seekSong = async(e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)  //view offsetX by console.log(e)
    }

    //Adding axios
    const getsongsData = async() => {
        try {
            const response = await axios.get(`${url}/api/song/list`)
            // Solution 2: Check if response.data.songs is defined and not empty
            if(response.data.songs && response.data.songs.length > 0){
                setsongsData(response.data.songs)
                setTrack(response.data.songs[0])
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getalbumsData = async() => {
        try {
            const response = await axios.get(`${url}/api/album/list`)
            // Solution 2: Check if response.data.songs is defined and not empty
            if(response.data.songs && response.data.songs.length > 0){
            setalbumsData(response.data.songs)
        }} catch (error) {
            console.log(error)
        }
    }


    //!Time Change during song Functionality
    useEffect(()=>{
        setTimeout(() => {
            //The ontimeupdate attribute defines a script to run when the playing position of an audio/video has changed
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100) + "%") //currentTime and duration are inbuilt properties of js
                setTime({
                    currentTime:{
                        second: Math.floor(audioRef.current.currentTime % 60),    
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime:{
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                }})
            }
        },1000);
    },[audioRef])

    //Now we have to call these function whenever these components gets loaded
    useEffect(()=>{
        getsongsData();
        getalbumsData();
    },[])

    //contextValue mei sab daal do jo export krna chahte ho
    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playWithId,
        previous,next,
        seekSong,
        songsData,albumsData
    }

return (
    <PlayerContext.Provider value={contextValue}>
        {props.children}
    </PlayerContext.Provider>
)
}

export default PlayerContextProvider;