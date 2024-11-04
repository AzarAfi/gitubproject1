import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import { useState } from "react";
import Additems from "./Additems";
import Searchitems from "./Searchitems";



function App() {
const [list, setList] = useState(JSON.parse(localStorage.getItem('totolist')));
const [listvalue,setlistvalue]=useState("");
const [listvalue2,setlistvalue2]=useState("");
const [searchitem,setsearchitem]=useState("");
const [searchitem2,setsearchitem2]=useState("");


function additems(Actor,Movie){
  const id=list.length?list[list.length-1].id+1:1;
  const newitems={id,see:false,Actor,Movie};
  const newaddlist=[...list,newitems]
  setList( newaddlist);
  localStorage.setItem("totolist",JSON.stringify(newaddlist))
}

// 
function handleChenge(id){
   let listitem=list.map((item)=> item.id===id ? {...item,see:!item.see}:item)
   setList(listitem)
   localStorage.setItem("totolist",JSON.stringify(listitem))
}
function handleDelete(id){
    let listdel=list.filter((item)=> item.id!==id)
    setList(listdel)
    localStorage.setItem("totolist",JSON.stringify(listdel))
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

    <Searchitems 
    searchitem={searchitem}
    setsearchitem={setsearchitem}
    searchitem2={searchitem}
    setsearchitem2={setsearchitem}
    />
 

    <Content 
    list = {list.filter(item => ((item.Actor),(item.Movie).toLowerCase()).includes(searchitem.toLocaleLowerCase(),searchitem2.toLocaleLowerCase()))}
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
