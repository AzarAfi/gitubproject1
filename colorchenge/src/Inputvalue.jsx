import React from 'react'
import colornames from 'colornames'




const Inputvalue = ({color,setColor,hexcolor,sethexcolor,setdark,dark}) => {
  return (
   <form onSubmit={(e)=>e.preventDefault()} className='w-screen h-fit flex justify-center items-center' >
    <input type="text" 
  placeholder='enter the color'
  value={color}
  onChange={(e)=>{setColor(e.target.value);
    sethexcolor(colornames(e.target.value))
   }
  }
  className='border-4 border-black p-3'/>
  <button type='submit' className='border-4 border-black p-3 bg-slate-800 text-white mx-5' onClick={()=>setdark(!dark)}> toggle the text</button>

   </form>
  ) 
}

export default Inputvalue