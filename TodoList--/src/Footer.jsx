import React from 'react'

const Footer = ({length}) => {
  return (
  <h1 className='text-center text-2xl bg-gray-900 text-yellow-300 p-8'> your list {length} {length==1?"item":"items"}</h1>
  )
}

export default Footer