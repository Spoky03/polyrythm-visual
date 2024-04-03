import { NumberInput } from './NumberInput';
import { IoMdRefresh } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";
import { SelectSoundSet } from './SelectSoundSet';

export function LeftSettings({
  tempo,
  handleSetTempo,
  handleRefresh,
  pause,
  handlePause,
  sourceTable,
  setSourceTable,
  sound_sets
}) {
  return <div className='flex md:flex-col sm:flex-row h-full justify-evenly flex-wrap'>

              <div className='flex flex-col min-w-max'>
                <label className='place-self-center'>Tempo</label>
                <NumberInput value={tempo} onChange={handleSetTempo} />
              </div>

              <hr className='md:flex hidden border-slate-400 dark:border-gray-700 rounded-md border-2 mt-2' />

              <div className='flex flex-col'>
                <label className='place-self-center'>Playback</label>
                <div className='flex justify-around'>
                  <IoMdRefresh size={30} className='place-self-center m-1 text-cyan-700 dark:text-cyan-400  transition duration-500 ease-in-out transform hover:scale-110' onClick={handleRefresh} />
                  {pause ? <FaPlay size={30} className='place-self-center m-1 text-cyan-700 dark:text-cyan-400  transition duration-500 ease-in-out transform hover:scale-110' onClick={handlePause} /> : <FaPause size={30} className='place-self-center m-1 text-cyan-700 dark:text-cyan-400  transition duration-500 ease-in-out transform hover:scale-110' onClick={handlePause} />}
                </div>
              </div>
              
              <hr className='md:flex hidden border-slate-400 dark:border-gray-700 rounded-md border-2 mb-1' />

              <div className='flex flex-col pb-2'>
                <label className='place-self-center'>Sound Set</label>
                <SelectSoundSet sourceTable={sourceTable} setSourceTable={setSourceTable} soundSets={sound_sets} />
              </div>

            </div>;
}
  