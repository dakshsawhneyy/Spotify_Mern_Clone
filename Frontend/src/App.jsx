import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const { audioRef, track } = useContext(PlayerContext)
  return (
    <div>
      <div className='bg-black h-screen'>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
        </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload='auto'></audio> 
      
      </div>
    </div>
  )
}

export default App

//<Audio> is used to specify that the browser should load the entire file when the page loads //Using audio ref in App.jsx because audio is needed in every file 