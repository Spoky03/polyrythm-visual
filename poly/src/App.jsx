import { useState, useEffect, useRef } from 'react'
import { Stage, Layer, Line, Circle} from 'react-konva'
import './App.css'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'


const PolyrhythmVisualizer = ({ polyrhythm, tempo, color }) => {
  // draw evenly spaced dots around a circle (polyrhythm)
  const [dots, setDots] = useState([])
  const [lines, setLines] = useState([])
  const [radius, setRadius] = useState(200)
  const [width, setWidth] = useState(800)
  const [height, setHeight] = useState(800)
  const [angle, setAngle] = useState(0)
  const [tempoMs, setTempoMs] = useState(6000 / tempo)
  const [lineWidth, setLineWidth] = useState(5)


  const stageRef = useRef(null)
  const layerRef = useRef(null)

  useEffect(() => {
    // calculate dots
    const dots = []
    const lines = []
    for (let i = 0; i < polyrhythm; i++) {
      const x = width / 2 + radius * Math.cos((2 * Math.PI * i) / polyrhythm)
      const y = height / 2 + radius * Math.sin((2 * Math.PI * i) / polyrhythm)
      dots.push({ x, y })
      lines.push({ x, y })
    }
    setDots(dots)
    setLines(lines)
  }
  , [polyrhythm, radius, width, height])

  useEffect(() => {
    // draw lines
    const interval = setInterval(() => {
      const lines = []
      const dots = []
      for (let i = 0; i < polyrhythm+1; i++) {
        const x = width / 2 + radius * Math.cos((2 * Math.PI * i + angle) / polyrhythm)
        const y = height / 2 + radius * Math.sin((2 * Math.PI * i + angle) / polyrhythm)
        lines.push({ x, y })
        dots.push({ x, y })
      }
      setLines(lines)
      setDots(dots)
      setAngle(angle + 0.1)
    }, tempoMs)
    return () => clearInterval(interval)
  }, [polyrhythm, radius, width, height, angle, tempoMs])

  return (
    <Stage width={width} height={height} ref={stageRef}>
      <Layer ref={layerRef}>
        {dots.map((dot, i) => (
          <Circle
            key={i}
            x={dot.x}
            y={dot.y}
            stroke={color}
            fill={color}
            radius={10}
          />
        ))}
        <Line
          points={lines.map((line) => [line.x, line.y]).flat()}
          stroke={color}
          strokeWidth={lineWidth}
          lineCap='round'
          lineJoin='round'
        />
      </Layer>
    </Stage>
  )
}

function App() {

  // polyrythm app
  const [tempo, setTempo] = useState(100)
  const [timeSignature, setTimeSignature] = useState(4)


  return (
    <>
    <div className='w-full'>
      <Navbar/>
      <div className='bg-gray-800 text-gray-300 flex min-h-screen flex-col items-center justify-baseline p-8 lg:p-24 sm:p-16 pt-16'>
        <PolyrhythmVisualizer polyrhythm={3} tempo={tempo} color='#ff00ff' />
        <PolyrhythmVisualizer polyrhythm={5} tempo={tempo} color='#eeeeee' />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
