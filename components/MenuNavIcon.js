import { useState } from 'react';

export default function MenuNavIcon() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`mr-[-12px] border-2 rounded-md flex justify-center p-3  flex-col flex items-end pointer transition-all duration-700 ease-in gap-y-1 ${
        hovered ? ' border-blue' : ' border-bg'
      }`}
    >
      <div
        className={`w-6 transition duration-300 ease  h-[2px] ${
          hovered ? 'bg-blue' : 'bg-white'
        }`}
      />
      <div
        className={`transition-all duration-300 ease-in h-[2px] ${
          hovered ? 'bg-blue w-6' : 'bg-white w-4'
        }`}
      />
      <div
        className={`w-6 transition duration-300 ease h-[2px]  ${
          hovered ? 'bg-blue' : 'bg-white'
        }`}
      />
    </div>
  );
}
