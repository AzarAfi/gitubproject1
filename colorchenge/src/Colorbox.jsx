import React from 'react'

const Colorbox = ({color,hexcolor,dark}) => {
  return (
    <main className='w-screen h-screen flex justify-center items-center' >
    <section className='w-1/3 h-1/2 border-4 border-black flex justify-center items-center text-3xl flex-col'
     style={{background :color,
     color: dark ? "white":"black"}}  >
        <p>{color? color:"empty value"}</p>
        <p>{hexcolor? hexcolor:"empty value"}</p>

    </section>
    </main>
  )
}

export default Colorbox