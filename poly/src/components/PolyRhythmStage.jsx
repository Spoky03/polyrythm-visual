import React, { useRef } from 'react'
import { Stage, Layer } from 'react-konva'
import perc1 from '../assets/perc1.wav'
import perc2 from '../assets/perc2.wav'
import perc3 from '../assets/perc3.wav'
import a1 from '../assets/a1.wav'
import a2 from '../assets/a2.wav'
import a3 from '../assets/a3.wav'
import {PolyPointer} from './PolyPointer'
import {PolyrhythmVisualizer} from './PolyrhythmVisualizer'

export const PolyRhythmStage = ({tempo, polyrhythmsArray}) => {

    const stageRef = useRef(null)
    const stageWidth = 400;
    const stageHeight = 400;
  
    // const sourceTable = [perc1, perc2, perc3]
    const sourceTable = [a1, a2, a3, a3, a3]
    const colorTable = ['#ff00ff', '#00eeee', '#eeeeee', '#00ff00', '#ff0000']
  
  
  
    return(
      <>
      <Stage width={stageWidth} height={stageHeight} ref={stageRef} className='bg-gray-700 m-5 rounded-2xl shadow-md p-10'>
        <PolyPointer x={stageWidth/2} y={0} color='#ffffff' />
        <Layer>
            {polyrhythmsArray.map((polyrhythm, i) => (
                <PolyrhythmVisualizer
                    key={`${polyrhythmsArray.length}-${i}`}
                    polyrhythm={polyrhythm}
                    audioSrc={sourceTable[i]}
                    tempo={tempo}
                    color={colorTable[i]}
                    width={stageWidth}
                    height={stageHeight}
                />
            ))}
          
        </Layer>
      </Stage>
      </>
    )
  }