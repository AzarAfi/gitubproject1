import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({post}) => {
 

  return (
    <>
    <main className='flex justify-center'>
   
    <article className='flex flex-col items-center text-center justify-around mt-10 border-4 w-1/3 bg-gray-800 text-white p-8 text-2xl'>
    <Link to={`newpost/${post.id}`}>
      <h1>{post.name}</h1>
      <h2>{post.dob}</h2>
      </Link>
      <p>{(post.comment).length <= 25 ? post.comment : `${(post.comment).slice(0,25)}....`}</p>
    </article>
 
    </main>
    </>
   
    
  )
}

export default Post