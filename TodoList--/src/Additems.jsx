import React from 'react'
import { BsDatabaseFillAdd } from "react-icons/bs";

const Additems = ({addNewItem,listvalue,setlistvalue,listvalue2,setlistvalue2}) => {
  return (
   <div>
    <form className='w-screen flex my-11 justify-around' onSubmit={addNewItem} >
        <input type="text" placeholder='Enter the Actor Name' required autoFocus className='w-1/3 p-5 mr-5 border-4 '
        value={listvalue} onChange={(e)=>setlistvalue(e.target.value)} />
         <input type="text" placeholder='Enter the Movie Name' required autoFocus className='w-1/3 p-5 mr-5 border-4 '
        value={listvalue2} onChange={(e)=>setlistvalue2(e.target.value)} />
     
        <button type='submit' ><BsDatabaseFillAdd  className='w-10 h-10'/></button>
    </form>
    </div>
  )
}

export default Additems