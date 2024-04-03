import { useState } from 'react'
import {PolyRhythmStage} from './PolyRhythmStage'
import { LeftSettings } from './LeftSettings';
import { RightSettings } from './RightSettings';


import a1 from '../assets/set_1/1.wav'
import a2 from '../assets/set_1/2.wav'
import a3 from '../assets/set_1/3.wav'
import a4 from '../assets/set_1/4.wav'
import a5 from '../assets/set_1/5.wav'

import b1 from '../assets/set_2/1.wav'
import b2 from '../assets/set_2/2.wav'
import b3 from '../assets/set_2/3.wav'
import b4 from '../assets/set_2/4.wav'
import b5 from '../assets/set_2/5.wav'

import c1 from '../assets/set_3/1.wav'
import c2 from '../assets/set_3/2.wav'
import c3 from '../assets/set_3/3.wav'
import c4 from '../assets/set_3/4.wav'
import c5 from '../assets/set_3/5.wav'

export const PolyrhythmParent = ({volume, muteAudio}) => {
  
    const xc1 = new Audio(c1)
    const xc2 = new Audio(c2)
    const xc3 = new Audio(c3)
    const xc4 = new Audio(c4)
    const xc5 = new Audio(c5)
    const xa1 = new Audio(a1)
    const xa2 = new Audio(a2)
    const xa3 = new Audio(a3)
    const xa4 = new Audio(a4)
    const xa5 = new Audio(a5)
    const xb1 = new Audio(b1)
    const xb2 = new Audio(b2)
    const xb3 = new Audio(b3)
    const xb4 = new Audio(b4)
    const xb5 = new Audio(b5)

    const sound_sets = [[xc1, xc2, xc3, xc4, xc5, xc5],[xa1, xa2, xa3, xa4, xa5],[xb1, xb2, xb3, xb4, xb5]]
    // const sound_sets = [[c1, c2, c3, c4, c5, c5],[a1, a2, a3, a4, a5],[b1, b2, b3, b4, b5]]
    
    const [stageWidth, setStageWidth] = useState(400);
    const [stageHeight, setStageHeight] = useState(400);

    const [pause, setPause] = useState(false)
    const [refresh, setRefresh] = useState(false)

    const [sourceTable, setSourceTable] = useState(sound_sets[0])
    const colorsSource = ['#cc2222', '#22cc22', '#2222cc', '#cc22cc', '#22cccc', '#cccc22', '#cccccc']
  

    // Initialize polyrhythmsArray with objects
    const [polyrhythmsArray, setPolyrhythmsArray] = useState([{polyrhythm: 4, color: colorsSource[2]}, {polyrhythm: 3, color: colorsSource[3]}])

    const [tempo, setTempo] = useState(60)

  
    const setPolyrhythms = (value, color, i) => {
        const newPolyrhythms = [...polyrhythmsArray]
        newPolyrhythms[i] = {polyrhythm: value, color: color}
        setPolyrhythmsArray(newPolyrhythms)
        console.log(newPolyrhythms)
      }
    
      const handleAddPolyrhythm = () => {
        if (polyrhythmsArray.length >= 5) {
          alert('Max 5 polyrhythms')
          return
        }
    
        //new polyrhythm that is not in the array
        const newPolyrhythm = Math.floor(Math.random() * 5) + 3
        if (polyrhythmsArray.includes(newPolyrhythm)) {
          handleAddPolyrhythm()
          return
        }
        // random choice
        const pickRandomColor = () => colorsSource[Math.floor(Math.random() * colorsSource.length)]
        // pick random color that is not in the array
        const newColor = pickRandomColor()
        if (polyrhythmsArray.map((polyrhythmObj) => polyrhythmObj.color).includes(newColor)) {
          handleAddPolyrhythm()
          return
        }
        setPolyrhythmsArray([...polyrhythmsArray, {polyrhythm: newPolyrhythm, color: newColor}])
      }
    
      const handleSetTempo = (e) => {
        if (e.target.value < 10 || e.target.value > 250) {
          setTempo(10)
          return
        }
        setTempo(e.target.value)
      }
    
      const handlePause = () => {
        setPause(!pause)
      }
      
      const handleRefresh = () => {
        setRefresh(true)
        console.log('refresh')
        setTimeout(() => {
          setRefresh(false)
        }
        , 100)
      }

    return (
        <div className='flex xl:mt-5 md:mt-4 sm:mt-1 xl:gap-5 sm:gap-3 flex-wrap justify-center align-content-center overflow-x-hidden xl:p-5 lg:p-4 md:p-3 sm:p-1 p-0'>

          <div className='bg-slate-300 dark:bg-gray-900 flex-1 xl:w-40 lg:w-32 py-2 p-5 shadow-md rounded-xl'>
            <LeftSettings tempo={tempo} handleSetTempo={handleSetTempo} handleRefresh={handleRefresh} pause={pause} handlePause={handlePause} sourceTable={sourceTable} setSourceTable={setSourceTable} sound_sets={sound_sets}  />
          </div>

          <div className='shrink-0'>
            <PolyRhythmStage
             stageHeight={stageHeight} stageWidth={stageWidth}
             volume={volume} tempo={tempo} polyrhythmsArray={polyrhythmsArray}
             sourceTable={sourceTable} muteAudio={muteAudio} pause={pause} setPause={setPause} refresh={refresh}  />
          </div>

          <div className='flex bg-slate-300 dark:bg-gray-900 flex-1 xl:w-40 lg:w-36 md:w-30 p-4 mr-5 shadow-md rounded-xl'>
            <RightSettings  polyrhythmsArray={polyrhythmsArray} setPolyrhythmsArray={setPolyrhythmsArray} setPolyrhythms={setPolyrhythms} handleAddPolyrhythm={handleAddPolyrhythm}  />
          </div>

        </div>
    )
}