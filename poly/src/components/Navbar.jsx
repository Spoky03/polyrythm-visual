import { DropDownSettings } from './DropDownSettings'
export const Navbar = ({muteAudio, setMuteAudio, toggleDarkMode, darkMode, volume, setVolume}) => {
      
      return (
            <nav className='dark:bg-gray-900 bg-slate-200 p-4 shadow-md fixed top-0 left-0 w-full z-50'>
                <div className='container mx-auto flex justify-between items-center'>
                <a href="/" className='w-1/2'><h1 className='font-bold text-xl w-fit'>Polyrythm Visualizer</h1></a>
                <DropDownSettings muteAudio={muteAudio} setMuteAudio={setMuteAudio} toggleDarkMode={toggleDarkMode} darkMode={darkMode} volume={volume} setVolume={setVolume} />
                </div>
            </nav>
      )
}