import { useState, useEffect, useRef } from 'react'
import './App.css'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {PolyRhythmStage} from './components/PolyRhythmStage'
import {ColorPicker} from './components/ColorPicker'




const NumberInput = ({value, onChange}) => {
  // return (
  //   <input className='text-gray-300 bg-gray-900 rounded-md shadow-sm text-center pl-4 m-1 w-16' type='number' value={value} onChange={onChange} />
  // )
  return (
    <input 
    className='appearance-none text-gray-300 bg-gray-900 rounded-md pr-1 pl-5 py-1leading-tight focus:outline-none focus:text-cyan-400 shadow-sm text-center m-1 w-16'
    type='number'
    value={value}
    onChange={onChange} />
  )
}

const PolyrhythmSettingCard = ({polyrhythm, setPolyrhythms, polyrhythmsArray, setPolyrhythmsArray, color, index, colorTable, setColorTable}) => {

  const handleRemovePolyrhythm = () => {
    const newPolyrhythms = polyrhythmsArray.filter((rhythm) => rhythm !== polyrhythm)
    const newColorTable = colorTable.filter((color, i) => i !== index)
    setPolyrhythmsArray(newPolyrhythms)
    setColorTable(newColorTable)
  }

  const handlePolyrhythmUpdate = (e) => {
    const value = parseInt(e.target.value);
    if (value < 1 || value > 50) {
      setPolyrhythms(1);
      return;
    } else if (polyrhythmsArray.includes(value)) {
      // If the value is in polyrhythmsArray, increment or decrement the value until a value not in the array is found
      let newValue = value;
      do {
        newValue++;
      } while (polyrhythmsArray.includes(newValue) && newValue <= 50);
      if (newValue > 50) {
        newValue = value;
        do {
          newValue--;
        } while (polyrhythmsArray.includes(newValue) && newValue >= 1);
      }
      setPolyrhythms(newValue);
      return;
    }
    setPolyrhythms(value);
  }

  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <ColorPicker index={index} colorTable={colorTable} setColorTable={setColorTable}/>
        <NumberInput value={polyrhythm} onChange={handlePolyrhythmUpdate} />
        <button className='text-red-600 font-extrabold rounded-md p-1 mx-1' onClick={handleRemovePolyrhythm}>X</button>
      </div>
    </div>
  )
}



function App() {

  // polyrythm app
  const [tempo, setTempo] = useState(40)
  const [timeSignature, setTimeSignature] = useState(4)
  const [colorTable, setColorTable] = useState(['#ff00ff', '#00ffff', '#ffffff', '#00ff00', '#ff0000', '#ffff00'])


  // const [polyrhythmsArray, setPolyrhythmsArray] = useState([{polyrhythm: 3, color: '#ff00ff'}, {polyrhythm: 7, color: '#ff0000'}])
  const [polyrhythmsArray, setPolyrhythmsArray] = useState([3, 7])
  const setPolyrhythms = (value,i) => {
    const newPolyrhythms = [...polyrhythmsArray]
    newPolyrhythms[i] = value
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
    
    setPolyrhythmsArray([...polyrhythmsArray, newPolyrhythm])
  }

  const handleSetTempo = (e) => {
    if (e.target.value < 1 || e.target.value > 250) {
      setTempo(1)
      return
    }
    setTempo(e.target.value)
  }

  return (
    <>
    <div className='w-full'>
      <Navbar/>
      <div className='bg-gray-800 text-gray-300 flex min-h-screen flex-col items-center justify-baseline p-8 lg:p-24 sm:p-16 pt-16'>
        <div className='flex gap-5'>
          <div className='flex-1 w-16 py-2'>
            <div className='flex flex-col'>
              <label>Tempo</label>
              <NumberInput value={tempo} onChange={handleSetTempo} />
            </div>
          </div>
          <div className='shrink-0'><PolyRhythmStage tempo={tempo} polyrhythmsArray={polyrhythmsArray} colorTable={colorTable} /></div>
          <div className='flex-1 w-32 py-2'>
            <label>Polyrhythms</label>
            {polyrhythmsArray.map((polyrhythm, i) => (
              <PolyrhythmSettingCard key={i} polyrhythmsArray={polyrhythmsArray} setPolyrhythmsArray={setPolyrhythmsArray} polyrhythm={polyrhythm} index={i} colorTable={colorTable} setColorTable={setColorTable} setPolyrhythms={(value) => setPolyrhythms(value, i)} />
            ))}
            <button className='bg-cyan-400 text-gray-900 rounded-md px-3 py-1 m-1' onClick={handleAddPolyrhythm}>Add</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
