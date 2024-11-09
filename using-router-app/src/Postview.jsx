import React from 'react'
import { useParams } from 'react-router-dom'
import Missing from './Missing';


const Postview = ({posts,handleDelete}) => {
    const {id} = useParams();

    const post=posts.find(post=> (post.id).toString() === id)


  return (
    <>
    <main className='flex justify-center w-screen h-1/2 '>
    {post && <article className='flex flex-col items-center  justify-around mt-10 border-4 w-1/3 bg-gray-800 text-white p-8 text-2xl'>
      <h1>{post.name}</h1>
      <h2>{post.dob}</h2>
      <p>{post.comment}</p>
      <button onClick={()=>handleDelete(post.id)} className='bg-green-700 text-white px-4 py-2 hover:bg-gray-700'>Delete</button>
    </article>
    
    }
     {!post && <Missing/>}
     </main>
    </>
  )
}

export default Postview