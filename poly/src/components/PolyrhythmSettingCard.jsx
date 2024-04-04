import { ColorPicker } from './ColorPicker';
import { IoClose } from "react-icons/io5";

export const PolyrhythmSettingCard = ({ polyrhythm, setPolyrhythms, polyrhythmsArray, setPolyrhythmsArray, color, index }) => {

  const handleRemovePolyrhythm = () => {
    const newPolyrhythms = polyrhythmsArray.filter((polyrhythmObj, i) => i !== index);
    setPolyrhythmsArray(newPolyrhythms);
  };

  const handlePolyrhythmUpdate = (e) => {
    const value = parseInt(e.target.value);

    // Check if value is a number
    if (isNaN(value) || !Number.isInteger(value) || value < 2 || value > 11) {
        return;
    }

    setPolyrhythmsArray(polyrhythmsArray.map((polyrhythmObj, i) => {
        if (i === index) {
            return { polyrhythm: value, color: polyrhythmObj.color };
        }
        return polyrhythmObj;
    }));
  };

  return (
    <div className='flex flex-col'>
      <div className='flex align-center gap-1'>
        <ColorPicker index={index} polyrhythmsArray={polyrhythmsArray} setPolyrhythmsArray={setPolyrhythmsArray} />
        <div className=''>
          <input
            className='text-slate-950 bg-slate-200 dark:text-gray-300 dark:bg-gray-700 appearance-none rounded-md pr-1 pl-5 py-1 leading-tight focus:outline-none focus:text-cyan-400 dark:hover:text-gray-50 hover:font-medium shadow-sm text-center m-1 w-16 place-self-center' type='number' 
            value={polyrhythm}
            onChange={handlePolyrhythmUpdate}
          />

          <button className='bg-red-500 hover:bg-red-600  absolute font-extrabold rounded-2xl dark:border-gray-900 border-slate-300 border-2 -ml-3 -mt-1' onClick={handleRemovePolyrhythm}>
            <IoClose size={14} color='black' />
          </button>
        </div>
      </div>
    </div>
  );
};
