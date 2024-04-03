import { useRef} from 'react'
import { Stage, Layer,Text } from 'react-konva'
import {PolyPointer} from './PolyPointer'
import {PolyrhythmVisualizer} from './PolyrhythmVisualizer'

export const PolyRhythmStage = ({tempo, polyrhythmsArray, muteAudio, sourceTable, stageHeight, stageWidth, volume, pause, setPause, refresh}) => {

    const stageRef = useRef(null)

    const handleStageClick = () => {
      const stage = stageRef.current
      const pointer = stage.getPointerPosition()
      console.log(pointer)
    }

    

    return(
      <>
      <Stage width={stageWidth} height={stageHeight+stageHeight/10} ref={stageRef} className='bg-slate-300 dark:bg-gray-900 m-5 rounded-2xl shadow-md p-10' onClick={handleStageClick}>
        {/* <Layer>          
          <Circle x={stageWidth/2} y={stageHeight/2} radius={stageWidth/2 - stageWidth/12} fill='transparent' stroke='#aaaaaa' strokeWidth={1}/>
        </Layer> */}
        { polyrhythmsArray.length > 0 ?
          <>
            <PolyPointer x={stageWidth/2} y={0}/>

            <Layer key={refresh}>
              {polyrhythmsArray.map((polyrhythmObj, i) => (
                <PolyrhythmVisualizer
                  key={`${polyrhythmsArray.length}-${i}`}
                  polyrhythm={polyrhythmObj.polyrhythm}
                  audioSrc={sourceTable[i]}
                  tempo={tempo}
                  color={polyrhythmObj.color}
                  width={stageWidth}
                  height={stageHeight}
                  muteAudio={muteAudio}
                  index={i}
                  volume={volume}
                  pause={pause}
                  setPause={setPause}
                />
              ))}
            </Layer>
          </>
          :
          <Layer>
            <Text text="Add polyrythms to start" fontSize={24} align='center' y={stageHeight/2} verticalAlign='center' width={400} fill='white' />
          </Layer>
        }

        {/* <Layer>
          {polyrhythmsArray.map((polyrhythmObj, i) => (
              <Circle
                key={`${polyrhythmsArray.length}-${i}`}
                polyrhythm={polyrhythmObj.polyrhythm}
                tempo={tempo}
                fill={polyrhythmObj.color}
                radius={12}
                y={stageHeight+20}
                x={(stageWidth/5*i)+40}
                stroke={'black'}
                strokeWidth={1}
              />
            ))}
        </Layer> */}
      </Stage>
      </>
    )
  }