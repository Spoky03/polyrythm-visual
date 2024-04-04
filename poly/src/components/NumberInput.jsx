import { useState } from 'react';
export const NumberInput = ({ value, onChange }) => {


  const [inputValue, setInputValue] = useState(value)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onChangeWrapper(e);
    }
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onChangeWrapper = (e) => {
    if (e.target.value < 10 || e.target.value > 250) {
      setInputValue(value)
      return;
    }
    onChange(e);
  }


  return (<input
    className='text-slate-950 bg-slate-200 dark:text-gray-300 dark:bg-gray-700 appearance-none rounded-md pr-1 pl-5 py-1 leading-tight focus:outline-none focus:text-cyan-400 dark:hover:text-gray-50 hover:font-medium shadow-sm text-center m-1 w-16 place-self-center' type='number' 
    value={inputValue}
    onChange={handleInputChange}
    onBlur={onChangeWrapper}
    onKeyDown={handleKeyDown}
  />
    
    
    );
};
