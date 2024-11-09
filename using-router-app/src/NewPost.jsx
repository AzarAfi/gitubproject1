import React from 'react'

const NewPost = ({newpost1,newpost2,setnewpost1,setnewpost2,handleformsubmit}) => {
  return (
    <main className='flex justify-center items-center w-screen h-screen  bg-gray-700'>
    <form  onSubmit={handleformsubmit} className='flex w-1/3 flex-col border-4 border-black p-10 bg-green-600 h-1/2 justify-around'>
    <h1 className='text-center text-3xl bg-white'>New Post</h1>
      <div>
        <label htmlFor="name" className='w-1/2'>Name:</label>
      <input type="text" 
      id='name'
      required
      autoFocus
      value={newpost1}
      onChange={(e)=>setnewpost1(e.target.value)}
      placeholder='Enter your name'
      className='border-4 p-2 border-black w-1/2'/>
      </div>
     
<div>
  <label htmlFor="comment" className='w-1/2'>Your Comment</label>
<textarea 
      id='comment'
      required
      autoFocus
      value={newpost2}
      onChange={(e)=>setnewpost2(e.target.value)}
      placeholder='Enter your name'
      className='border-4 p-2 border-black w-1/2' ></textarea>

</div>
     

      <button type='submit' className='bg-green-700 text-white px-4 py-2 hover:bg-gray-700'>Sent Post</button>

    </form>
    </main>
  )
}

export default NewPost