import React from 'react'

const Colorbored = ({color,setcolor}) => {
  return (
    <main className='w-screen h-screen flex justify-around items-center flex-col'>
        <div className='w-1/3 border-4 border-black h-1/2 bg-red-600'></div>
        <input type="text" placeholder='Enter the Color' className='border-4 p-5' value={color} onChange={(e)=>setcolor(e.target.value)}/>
        <button className='border-4  px-5 py-3 bg-red-500 text-white hover:bg-white hover:text-red-500'>toggle the Text</button>
    </main>
  )
} 

export default Colorbored