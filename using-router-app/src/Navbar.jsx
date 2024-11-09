import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({postval,setpostval}) => {
  return (
    <>
    <nav className='flex w-screen justify-around p-8 bg-green-800 text-white items-center font-bold text-2xl' >
      <Link to="/" >Home</Link>
      <Link to="/newpost">NewPost</Link>
      <Link to="/about">About</Link>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" 
          value={postval}
          onChange={(e)=>setpostval(e.target.value)}
          className='border-4 p-2 border-black text-black'
          placeholder='enter ther serchpost'
          />
        </form>
    </nav>
    </>
  )
}

export default Navbar