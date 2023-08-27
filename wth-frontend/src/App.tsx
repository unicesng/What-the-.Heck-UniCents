import { useState } from 'react'
import './App.css'
import {Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainAppBar from './components/MainAppBar';
import UniversityComparator from './components/UniversityComparator';
import DonorList from './components/DonorList';
import Discussion from './components/Discussion';
import Login from './components/Login';
import About from './components/About';
import Home from './components/Home';
import { Box } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <MainAppBar />
      <Box sx ={{mt: 10}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparator" element={<UniversityComparator />} />
          <Route path="/donors" element={<DonorList />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
