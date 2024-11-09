import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <main>
    {posts.length ? (<Feed 
      posts={posts}/>):(<h1 className="text-center">no comment yet</h1>)}
    </main>
  )
}

export default Home