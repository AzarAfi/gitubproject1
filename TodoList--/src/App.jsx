import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useState } from "react";
import Additems from "./Additems";

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
const [listvalue,setlistvalue]=useState("");
const [listvalue2,setlistvalue2]=useState("");


function additems(Actor,Movie){
  const id=list.length?list[list.length-1].id+1:1;
  console.log(id)
  const newitems={id,see:false,Actor,Movie};
  const newaddlist=[...list,newitems]
  setList( newaddlist);
}

// 
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

function addNewItem(e){
  e.preventDefault();
  setlistvalue("");
  setlistvalue2("");
   
   additems(listvalue,listvalue2)
}

 

  return (
    <>
    <Header />
    <Additems 
    listvalue={listvalue}
    setlistvalue={setlistvalue}
    addNewItem={addNewItem}
    listvalue2={listvalue2}
    setlistvalue2={setlistvalue2}

    />
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
