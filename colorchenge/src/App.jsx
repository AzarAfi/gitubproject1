import { useState } from 'react'
import Colorbox from './Colorbox'
import Inputvalue from './Inputvalue'

function App() {
  const [color, setColor] = useState("")
  const[hexcolor,sethexcolor]=useState('')
  const[dark,setdark]=useState(true)
  return (

<>
<Colorbox  color={color}
           hexcolor={hexcolor}
           dark={dark}/>
<Inputvalue 
           color={color}
           setColor={setColor}
           setdark={setdark}
           hexcolor={hexcolor}
           sethexcolor={sethexcolor}
           dark={dark}
          />

</>
  )
 
}

export default App
