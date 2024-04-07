import { useState, useEffect} from 'react'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {About} from './components/About'
import {Pookie} from './components/Pookie'
import { RouteNotFound } from './components/RouteNotFound'
import { PolyrhythmParent } from './components/PolyrhythmParent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { FaPause, FaPlay } from "react-icons/fa6";
// import { IoMdRefresh } from "react-icons/io";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    const initialValue = JSON.parse(saved);
    if (initialValue === null) {
      return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const [muteAudio, setMuteAudio] = useState(false)
  const [volume, setVolume] = useState(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={'w-full min-w-full overflow-x-hidden ' + (darkMode ? 'dark' : '')}>
        <Navbar muteAudio={muteAudio} setMuteAudio={setMuteAudio} toggleDarkMode={toggleDarkMode} darkMode={darkMode} volume={volume} setVolume={setVolume} />

        <div className='bg-transparent dark:text-gray-300 flex min-h-screen max-w-max flex-col mx-auto justify-start px-1 pt-20 overflow-x-hidden'>
          <Routes>
            <Route path='/' element={<PolyrhythmParent volume={volume} muteAudio={muteAudio} />} />
            <Route path='/polyrhythm' element={<PolyrhythmParent volume={volume} muteAudio={muteAudio} />} />
            <Route path='/about' element={<About />} />
            <Route path='/pookie' element={<Pookie />} />
            <Route path='*' element={<RouteNotFound />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App;
