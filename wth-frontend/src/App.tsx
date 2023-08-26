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

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <MainAppBar />
      <Routes>
        <Route path="/" element={<UniversityComparator />} />
        <Route path="/donors" element={<DonorList />} />
      </Routes>
    </>
  )
}

export default App
