import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSong from './pages/AddSong';
import ListSongs from './pages/ListSongs';
import AddAlbum from './pages/AddAlbum';
import ListAlbum from './pages/ListAlbum';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export const url = 'http://localhost:5000'

const App = () => {
  return (
    <div className='min-h-screen flex '>
      <ToastContainer/>
      <Sidebar/>
      <div className='h-screen flex-1 bg-[#F3FFF7] '>
        <Navbar/>
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/addSong' element={<AddSong/>} />
            <Route path='/listSong' element={<ListSongs/>} />
            <Route path='/addAlbum' element={<AddAlbum/>} />
            <Route path='/listAlbum' element={<ListAlbum/>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
