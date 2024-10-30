import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
        id: 1,
        Actor: "Vijai",
        Movie: "GOAT",
        see: true
    },
    {
        id: 2,
        Actor: "SK",
        Movie: "Amaran",
        see: true
    },
    {
        id: 3,
        Actor: "Ajith",
        Movie: "Vida Muyarchi",
        see: false
    },
    {
        id: 4,  
        Actor: "Dhanush",
        Movie: "Raayan",
        see: true
    },    {
        id: 5,  
        Actor: "surya",
        Movie: "kanguva",
        see: false
    }
]);

function handleChenge(id){
   let listitem=list.map((item)=> item.id===id ? {...item,see:!item.see}:item)
   setList(listitem)
   localStorage.setItem("totolist",JSON.stringify(list))
}
function handleDelete(id){
    let listdel=list.filter((item)=> item.id!==id)
    setList(listdel)
    localStorage.setItem("totolist",JSON.stringify(list))
}
 

  return (
    <>
    <Header />
    <Content 
    list = {list}
    handleChenge={handleChenge}
    handleDelete={handleDelete}
    />
    <Footer 
    length={list.length}
    />
    
    </>
      
  )
}

export default App
