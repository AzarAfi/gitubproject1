import React from 'react'

const Searchitems = ({searchitem,setsearchitem}) => {
  return (
    <form  className='w-screen flex justify-center'>
    <input type="text" 
    placeholder='Enter the search item'
    onSubmit={(e)=>{e.preventDefault()}}
    value={searchitem}
    onChange={(e)=>setsearchitem(e.target.value)}
    className='w-1/3 p-5 mr-5 border-4 text-center'
    />
   </form>
  )
}

export default Searchitems