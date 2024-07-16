import React from 'react';

const HpBar = ({ currentHp, maxHp }) => {
  const hpPercentage = (currentHp / maxHp) * 100;

  return (
    <div className="w-full bg-gray-300 border border-black rounded overflow-hidden flex items-center justify-start relative">
      <div className="h-7 bg-red-500 transition-all duration-300 ease-in-out" style={{ width: `${hpPercentage}%` }}></div>
      <p className=' absolute self-center justify-self-center ml-[35%] text-black font-semibold'>{currentHp}/{maxHp}</p>
    </div>
  );
};

export default HpBar;