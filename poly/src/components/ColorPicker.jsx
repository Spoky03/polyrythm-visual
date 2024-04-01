export const ColorPicker = ({index, setColorTable, colorTable}) => {

    const handleSetColor = (e) => {
      const newColorTable = [...colorTable]
      newColorTable[index] = e.target.value
      setColorTable(newColorTable)
    }
  
    return (
      <div className='flex w-6'>
        <input className='gray-300 bg-gray-800 mt-0.5 text-center' type='color' value={colorTable[index]} onChange={handleSetColor} />
      </div>
    )
  }