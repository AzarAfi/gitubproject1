import { useState } from 'react'
import Colorbored from './Colorbored'


function App() {
  const [color, setcolor] = useState("")

  return (
    <>
  <Colorbored color={color} setcolor={setcolor}/>
    </>
  )
}

export default App
