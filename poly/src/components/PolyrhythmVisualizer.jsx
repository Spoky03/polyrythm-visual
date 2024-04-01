import { useState, useEffect } from 'react'
import { Group, Circle, Line } from 'react-konva'
import { Html } from 'react-konva-utils'


export const PolyrhythmVisualizer = ({ polyrhythm, rotation, color, width, height,tempo, audioSrc}) => {
    // draw evenly spaced dots around a circle (polyrhythm)
    const [dots, setDots] = useState([])
    const [lines, setLines] = useState([])
    const [radius, setRadius] = useState(width/2 - width/12)
  
    const [angle, setAngle] = useState(270) 
    const [audio, setAudio] = useState(0)
  
    const [anglesWithDots, setAnglesWithDots] = useState([])
    const [animateDot, setAnimateDot] = useState(null)
  
    const handleAnimation = (i) => {
      setAnimateDot(polyrhythm - i)
      setTimeout(() => {
        setAnimateDot(null)
      }, 250)
    }
  
    useEffect(() => {
      const calculateAnglesWithDots = (dots) => {
        const angles = []
        for (let i = 0; i < dots.length; i++) {
          const x = dots[i].x - width / 2
          const y = dots[i].y - height / 2
          let angle = Math.round(Math.atan2(y, x) * (180 / Math.PI))
          if (angle < 0) {
            angle += 360
          }
          angles.push(angle)
        }
        return angles
      }
      setAnglesWithDots(calculateAnglesWithDots(dots))
    }, [dots])
  
    useEffect(() => {
      // draw lines
        const lines = []
        const dots = []
        for (let i = 0; i < polyrhythm+1; i++) {
          const x = width / 2 + radius * Math.cos((2 * Math.PI * i) / polyrhythm)
          const y = height / 2 + radius * Math.sin((2 * Math.PI * i) / polyrhythm)
          lines.push({ x, y })
          dots.push({ x, y, i })
        }
        setLines(lines)
        setDots(dots)
      }, [polyrhythm, radius, width, height])
      
      const playAudio = () => {
        const audio = new Audio(audioSrc)
        audio.play()
      }
      useEffect(() => {
        playAudio()
      }
      , [audio])
      
      useEffect(() => {
        const interval = setInterval(() => {
          setAngle(prevAngle => (prevAngle + 1) % 360) // Use functional update form
  
          if (anglesWithDots.includes((angle + 90) % 360)) {
            handleAnimation(dots[anglesWithDots.indexOf((angle + 90) % 360)].i)
            setAudio(audio+1)
          }
  
        }, 600/tempo)
        return () => clearInterval(interval)
      }, [tempo, angle]) 
  
      
  
      return (
        <>
        <Group rotation={angle} x={width / 2} y={height / 2} offsetX={width / 2} offsetY={height / 2}>
          {dots.map((dot, i) => (
            <Circle
              key={i}
              x={dot.x}
              y={dot.y}
              stroke={color}
              fill={color}
              radius={10}
              scale={animateDot===i ? {x: 1.5, y: 1.5} : {x: 1, y: 1}}
              shadowColor='blue'
              shadowBlur={animateDot===i ? 15 : 0}
  
            />
          ))}
          <Line
            points={lines.map((line) => [line.x, line.y]).flat()}
            stroke={color}
            strokeWidth={6}
            lineCap='round'
            lineJoin='round'
          />
        </Group>
        </>
      )
    }