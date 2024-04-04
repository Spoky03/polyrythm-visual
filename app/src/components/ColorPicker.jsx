export const ColorPicker = ({index, polyrhythmsArray, setPolyrhythmsArray}) => {

    const handleSetColor = (e) => {
      const newPolyrhythms = [...polyrhythmsArray]
      newPolyrhythms[index].color = e.target.value
      setPolyrhythmsArray(newPolyrhythms)
    }
  
    return (
      <div className='flex w-6'>
        <input className='bg-slate-300 dark:gray-300 dark:bg-gray-900 mt-1 text-center'
        type='color' 
        value={polyrhythmsArray[index].color} 
        onChange={handleSetColor} />
      </div>
    )
  }