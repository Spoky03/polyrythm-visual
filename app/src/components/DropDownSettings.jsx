import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import { useLocation } from 'react-router-dom'



const VolumeSlider = ({ volume, setVolume,muteAudio, setMuteAudio }) => {

  const [localVolume, setLocalVolume] = useState(volume);

  const handleInputUpdate = (event) => {
    setLocalVolume(event.target.value);
  };

  const handleVolumeChange = (event) => {
    setVolume(localVolume);
    if (event.target.value == 0) {
      setMuteAudio(true);
    } else if (event.target.value > volume && muteAudio) {
      setMuteAudio(false);
    }
  };

  return (
    <input type="range" min="0" max="1" step="0.01" value={localVolume} onChange={handleInputUpdate} onMouseUp={handleVolumeChange}/>
    );
}
export const DropDownSettings = ({ muteAudio, setMuteAudio, toggleDarkMode, darkMode, volume, setVolume }) => {

  const [rememberedVolume, setRememberedVolume] = useState(0.5);
  const handleToggleMute = () => {
    setRememberedVolume(volume);
    setMuteAudio(!muteAudio);
    setVolume(muteAudio ? rememberedVolume : 0);
  };

  return (
    <div className='mr-5 flex gap-1 text-cyan-800 dark:text-cyan-400'>
      {useLocation().pathname === '/' ? 
      <>
        <div className="hidden shrink justify-center sm:flex">
          <VolumeSlider volume={volume} setVolume={setVolume} muteAudio={muteAudio} setMuteAudio={setMuteAudio} />
        </div>
        <button 
          onClick={handleToggleMute} 
          className="place-self-center transition duration-500 ease-in-out transform hover:scale-125"
        >
          {muteAudio ? <HiVolumeOff size={30}/> : <HiVolumeUp size={30} />}
        </button>
      </>
       : null}
      <button onClick={toggleDarkMode} className='text-cyan-800 dark:text-cyan-400 rounded-md p-1 m-1  place-self-center hover:animate-[spin_0.6s_ease-in-out]'>
        {darkMode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
      </button>
    </div>
  );
};