import React from 'react'

const Loading =()=>{

    return (
      <div className='flex items-center justify-center m-5'><div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-red-400 animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full bg-red-400 animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-red-400 animate-bounce [animation-delay:.7s]"></div>
    </div></div>
    )
  
}

export default Loading