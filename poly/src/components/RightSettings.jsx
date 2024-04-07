import React from "react";
import { PolyrhythmSettingCard } from "./PolyrhythmSettingCard";
export function RightSettings({
  polyrhythmObj,
  i,
  polyrhythmsArray,
  setPolyrhythmsArray,
  value,
  setPolyrhythms,
  handleAddPolyrhythm
}) {
  return <div className='flex flex-wrap content-start justify-center gap-1'>
              <label className='place-self-center'>Rhythm ratios</label>
              {polyrhythmsArray.map((polyrhythmObj, i) => <PolyrhythmSettingCard key={i} polyrhythmsArray={polyrhythmsArray} setPolyrhythmsArray={setPolyrhythmsArray} polyrhythm={polyrhythmObj.polyrhythm} index={i} setPolyrhythms={value => setPolyrhythms(value, i)} />)}
              {polyrhythmsArray.length < 5 && <button className={'bg-cyan-800 text-slate-200 dark:bg-cyan-400 dark:text-gray-900 hover:font-semibold hover:shadow-xl hover:shadow-cyan-500/50 rounded-md px-3 py-1 m-1 w-16 place-self-center ' + (polyrhythmsArray.length === 0 ? 'animate-pulse' : '')} onClick={handleAddPolyrhythm}>Add</button>}
            </div>;
}
  