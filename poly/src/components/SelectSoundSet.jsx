export const SelectSoundSet = ({ sourceTable, setSourceTable, soundSets }) => {

  const handleSetSourceTable = (i) => {
    setSourceTable(soundSets[i]);
  };

  const names = ['Percussion', 'Saw', 'Rims'];

  return (
    <select className='text-slate-900 bg-slate-200 dark:text-gray-300 dark:bg-gray-700 m-1 appearance-none rounded-md py-1 leading-tight focus:outline-none dark:focus:text-cyan-400 dark:hover:text-gray-50 hover:font-medium shadow-sm text-center m-1 w-20 place-self-center' onChange={(e) => handleSetSourceTable(e.target.value)}>
      {soundSets.map((soundSet, i) => (
        // <option key={i} value={i}>Set {i+1}</option>
        <option key={i} value={i}>{names[i]}</option>
      ))}
    </select>
  );
};
