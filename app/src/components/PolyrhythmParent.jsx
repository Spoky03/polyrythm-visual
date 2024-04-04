import { Suspense, useEffect, useState, useRef } from 'react'
import {PolyRhythmStage} from './PolyRhythmStage'
import { LeftSettings } from './LeftSettings';
import { RightSettings } from './RightSettings';


const url = '/api';

export const PolyrhythmParent = ({volume, muteAudio}) => {

  const [audioBuffers, setAudioBuffers] = useState({});
  const [soundSets, setSoundSets] = useState([]);

  const audioContext = useRef(null);

  const [pause, setPause] = useState(false)
  const [refresh, setRefresh] = useState(false)

  
  useEffect(() => {
    audioContext.current = new (window.AudioContext || window.webkitAudioContext)();
  }, [refresh]);

  useEffect(() => {
    console.log('audioContext', audioContext)
  }, [audioContext])


  const a1 = `${url}/a1`
  const a2 = `${url}/a2`
  const a3 = `${url}/a3`
  const a4 = `${url}/a4`
  const a5 = `${url}/a5`

  const b1 = `${url}/b1`
  const b2 = `${url}/b2`
  const b3 = `${url}/b3`
  const b4 = `${url}/b4`
  const b5 = `${url}/b5`

  const c1 = `${url}/c1`
  const c2 = `${url}/c2`
  const c3 = `${url}/c3`
  const c4 = `${url}/c4`
  const c5 = `${url}/c5`

  useEffect(() => {
    const audioFiles = { a1, a2, a3, a4, a5, b1, b2, b3, b4, b5, c1, c2, c3, c4, c5 };
    // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // Fetch and decode the audio data for each file
    Promise.all(
      Object.entries(audioFiles).map(([key, src]) =>
        fetch(src)
          .then(response => response.arrayBuffer())
          .then(arrayBuffer => audioContext['current'].decodeAudioData(arrayBuffer))
          .then(decodedAudioData => {
            return { [key]: decodedAudioData };
          })
      )
    ).then(buffers => {
      const buffersMap = Object.assign({}, ...buffers);
      setAudioBuffers(buffersMap);
    })
    .catch(error => console.error(error));
    }, []);

    const [sourceTable, setSourceTable] = useState('a')
    
    const [stageWidth, setStageWidth] = useState(400);
    const [stageHeight, setStageHeight] = useState(400);

    const colorsSource = ['#cc2222', '#22cc22', '#2222cc', '#cc22cc', '#22cccc', '#cccc22', '#cccccc']
  

    // Initialize polyrhythmsArray with objects
    const [polyrhythmsArray, setPolyrhythmsArray] = useState(() => {
      const saved = localStorage.getItem('polyrhythmsArray');
      const initialValue = JSON.parse(saved);
      return initialValue || [{polyrhythm: 4, color: colorsSource[2]}, {polyrhythm: 3, color: colorsSource[3]}];
    });

    useEffect(() => {
      localStorage.setItem('polyrhythmsArray', JSON.stringify(polyrhythmsArray));
    }, [polyrhythmsArray]);

    const [tempo, setTempo] = useState(() => {
      const saved = localStorage.getItem('tempo');
      const initialValue = JSON.parse(saved);
      return initialValue || 60;
    });
    useEffect(() => {
      localStorage.setItem('tempo', JSON.stringify(tempo));
    }, [tempo]);

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

          <Suspense fallback={<div>Loading...</div>}>
            <div className='bg-slate-300 dark:bg-gray-900 flex-1 xl:w-40 lg:w-32 py-2 p-5 shadow-md rounded-xl'>
              <LeftSettings tempo={tempo} handleSetTempo={handleSetTempo} handleRefresh={handleRefresh} pause={pause} handlePause={handlePause} sourceTable={sourceTable} setSourceTable={setSourceTable} soundSets={soundSets}  />
            </div>

            <div className='shrink-0'>
              <PolyRhythmStage
              stageHeight={stageHeight} stageWidth={stageWidth}
              volume={volume} tempo={tempo} polyrhythmsArray={polyrhythmsArray}
              sourceTable={sourceTable} muteAudio={muteAudio} pause={pause} setPause={setPause} refresh={refresh}
              audioBuffers={audioBuffers}
              audioContext={audioContext}
              />
            </div>

            <div className='flex bg-slate-300 dark:bg-gray-900 flex-1 xl:w-40 lg:w-36 md:w-30 p-4 mr-5 shadow-md rounded-xl'>
              <RightSettings  polyrhythmsArray={polyrhythmsArray} setPolyrhythmsArray={setPolyrhythmsArray} setPolyrhythms={setPolyrhythms} handleAddPolyrhythm={handleAddPolyrhythm}  />
            </div>
          </Suspense>

        </div>
    )
}