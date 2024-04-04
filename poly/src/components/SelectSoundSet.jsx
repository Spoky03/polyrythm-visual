export const SelectSoundSet = ({ sourceTable, setSourceTable, soundSets }) => {

  const handleSetSourceTable = (e) => {
    setSourceTable(e);
  }

  const names = [{'Percussion': 'a'}, {'Rims': 'b'}, {'Saw': 'c'}];

  return (
    <select className='text-slate-900 bg-slate-200 dark:text-gray-300 dark:bg-gray-700 m-1 appearance-none rounded-md py-1 leading-tight focus:outline-none dark:focus:text-cyan-400 dark:hover:text-gray-50 hover:font-medium shadow-sm text-center m-1 w-20 place-self-center' onChange={(e) => handleSetSourceTable(e.target.value)}>
      {names.map((soundSet, i) => (
        // <option key={i} value={i}>Set {i+1}</option>
        <option key={i} value={Object.values(soundSet)[0]}>{Object.keys(soundSet)[0]}</option>
      ))}
    </select>
  );
};
