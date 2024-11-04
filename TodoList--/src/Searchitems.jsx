import React from 'react'

const Searchitems = ({searchitem,setsearchitem,searchitem2,setsearchitem2}) => {

  return (

    <form  className='w-screen flex justify-around mb-6'>
    <input type="text" 
    placeholder='Enter the search Actor Name'
    onSubmit={(e)=>{e.preventDefault()}}
    value={searchitem}
    onChange={(e)=>setsearchitem(e.target.value)}
    className='w-1/3 p-5 mr-5 border-4 text-center'
    />
    <input type="text" 
    placeholder='Enter the search Movie Name'
    onSubmit={(e)=>{e.preventDefault()}}
    value={searchitem2}
    onChange={(e)=>setsearchitem2(e.target.value)}
    className='w-1/3 p-5 mr-5 border-4 text-center'
    />
   </form>

  )
}

export default Searchitems
