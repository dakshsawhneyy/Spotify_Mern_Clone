import React, { useContext } from 'react'
import { songsData } from '../assets/admin-assets/assets'
import { assets } from '../assets/admin-assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const { seekBg, seekBar, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext)

    //Error fix whem track is not there (last step)
return track ? (
    <div className='h-[10%] items-center text-white bg-black flex px-4'>
        <div className='lg:flex hidden gap-5 items-center'>
            <img src={track.image} className='w-16' alt="" />
            <div className='flex flex-col'>
                <p>{track.name}</p>
                {track.desc && <p>{track.desc.slice(0, 12)}</p>}    
            </div>
        </div>

        <div className='flex flex-col m-auto gap-3 items-center'>
            <div className='flex gap-5'>
                <img src={assets.shuffle_icon} className='w-4 cursor-pointer' alt="" />
                <img src={assets.prev_icon} onClick={previous} className='w-4 cursor-pointer' alt="" />
                {playStatus ? <img src={assets.pause_icon} onClick={pause} className='w-4 cursor-pointer' alt="" /> : <img src={assets.play_icon} onClick={play} className='w-4 cursor-pointer' alt="" />}
                <img src={assets.next_icon} onClick={next} className='w-4 cursor-pointer' alt="" />
                <img src={assets.loop_icon} className='w-4 cursor-pointer' alt="" />
            </div>
            <div className='flex gap-5 items-center '>
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                <div ref={seekBg} onClick={seekSong} className='bg-gray-300 w-[50vw] max-w-[500px] rounded-full cursor-pointer'>
                    <hr ref={seekBar} className='h-1 bg-green-800 rounded-full border-none w-0'></hr>
                </div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>

        <div className='lg:flex gap-3 items-center hidden'>
            <img src={assets.plays_icon} className='w-4' alt="" />
            <img src={assets.queue_icon} className='w-4' alt="" />
            <img src={assets.speaker_icon} className='w-4' alt="" />
            <img src={assets.volume_icon} className='w-4' alt="" />
            <div className='w-20 bg-slate-50 rounded-full h-1'>
            </div>
            <img src={assets.mini_player_icon} className='w-4' alt="" />
            <img src={assets.zoom_icon} className='w-4' alt="" />
        </div>
    </div>
) : null
}

export default Player

//{track.desc && <p>{track.desc.slice(0, 12)}</p>}  .  This ensures that the <p> element displaying the truncated description is only rendered if track.desc is defined. Using .slice(0, 12) on an undefined desc would cause an error, so this check prevents that.