import React from 'react'
import { FaTrash } from "react-icons/fa";

const List = ({item,handleChenge,handleDelete}) => {
  return (
    
    <li key={item.id} className='flex m-3 bg-gray-600 p-5 mx-6 w-1/3 justify-around text-yellow-50 rounded-full'>

    <input type="checkbox" checked={item.see} className='w-10 h-10' onChange={()=>handleChenge(item.id)}/>

    <label onDoubleClick={()=>{handleChenge(item.id)}}>{item.Actor}</label>

    <label onDoubleClick={()=>{handleChenge(item.id)}} >{item.Movie}</label>
    
    <FaTrash className='text-white w-10 h-10 hover:text-red-700' 
    role='button'  onClick={()=>handleDelete(item.id)}/>
</li>
  )
}

export default List