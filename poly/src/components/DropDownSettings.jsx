import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import { useLocation } from 'react-router-dom'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip.tsx"

import Slider from 'react-slider';

const VolumeSlider = ({ volume, setVolume, muteAudio, setMuteAudio }) => {
  const [localVolume, setLocalVolume] = useState(volume);

  const handleInputUpdate = (newValue) => {
    setLocalVolume(newValue);
  };

  const handleVolumeChange = (newValue) => {
    setVolume(newValue);
    if (newValue == 0) {
      setMuteAudio(true);
    } else if (newValue > volume && muteAudio) {
      setMuteAudio(false);
    }
  };

  return (
    <Slider
      min={0}
      max={1}
      step={0.01}
      value={localVolume}
      onChange={handleInputUpdate}
      onAfterChange={handleVolumeChange}
      className="rounded-md w-full h-5 w-full justify-center place-self-center"
      thumbClassName="dark:bg-cyan-400 bg-cyan-700 w-5 h-5 rounded-full cursor-pointer top-0"
      trackClassName="dark:bg-gray-200 bg-slate-900 rounded-2xl inset-y-1.5"
    />
  );
};




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
        <div className="hidden shrink justify-center sm:flex w-32">
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
       <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div role="button" onClick={toggleDarkMode} className='text-cyan-800 dark:text-cyan-400 rounded-md p-1 m-1  place-self-center hover:animate-[spin_0.6s_ease-in-out]'>
              {darkMode ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Change website theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};