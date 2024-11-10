import { Route, Router, Routes,Link, useNavigate } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Home from "./Home"
import Footer from "./Footer"
import Missing from "./Missing"
import { useEffect, useState } from "react"
import NewPost from "./NewPost"
import {format} from "date-fns"
import About from "./About"
import Postview from "./Postview"
import api from "./api/post"
import Editpost from "./Editpost"



function App() {

  const[posts,setposts]=useState([])
  const[postval,setpostval]=useState("")
  const[searchres,setsearchres]=useState([])
  const[newpost1,setnewpost1]=useState("")
  const[newpost2,setnewpost2]=useState("")
  const[editname,seteditname]=useState("")
  const[editcomment,seteditcomment]=useState("")
  const navicate =useNavigate()
 
useEffect(()=>{
  const filterresult=posts.filter((post)=>
    ((post.name).toLowerCase()).includes(postval.toLowerCase())
  )
  setsearchres(filterresult.reverse());

},[posts,postval]) 


useEffect(()=>{
  const fetchdeta = async () =>{
    try{
      const responce = await api.get("/posts")
      setposts(responce.data)

    }catch(err){
      if(err.responce){
        console.log(err.responce.status)
        console.log(err.responce.data)
        console.log(err.responce.headers)
      }
      else{
        console.log(`Errorbhai:${err.message}`);
      }
    }
    
  }
  fetchdeta()
},[])


  
const handleformsubmit = async (e) =>{
    e.preventDefault();
  const id=posts.length ? posts[posts.length-1].id+1:1;
  const datetime = format(new Date(), "EEEE, MMMM dd, yyyy, hh:mm:ss a");
  const newpost={id,name:newpost1,dob:datetime,comment:newpost2}

  try{
    const responce = await api.post("/posts",newpost)
  const updatepost=[...posts,responce.data]
  setposts(updatepost)
  setnewpost1("")
  setnewpost2("")
  setTimeout(() => {
    alert("add post suess")
  },1000);
  navicate("/")
    
  }catch{
    if(err.responce){
      console.log(err.responce.status)
      console.log(err.responce.data)
      console.log(err.responce.headers)
    }
    else{
      console.log(`Errorbhai:${err.message}`);
    }

  }
  
} 

const handleDelete = async (id) => {
  try {
    await api.delete(`posts/${id}`);
    const updatedPosts = posts.filter(post => post.id !== id);
    setposts(updatedPosts); 
    navicate("/"); 
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
const handleEdit= async (id)=>{
  const datetime = format(new Date(), "EEEE, MMMM dd, yyyy, hh:mm:ss a");
  const editpost={id,name:editname,dob:datetime,comment:editcomment}
  try{
    const responce=await api.put(`/posts/${id}`,editpost)
    setposts(posts.map(post => post.id === id ? {... responce.data}: post))
    seteditname("")
    seteditcomment("")
    setTimeout(() => {
      alert("edit post sueuess")
    },1000);
    navicate("/")
  }
  catch (err) {
    console.log(`Error: ${err.message}`);
  }
  
 
}



  return (
    <>

 <Header />
  <Navbar
  postval={postval}
  setpostval={setpostval}
   /> 
  



  
<Routes>
    <Route path="/" element={<Home 
  posts={searchres}
   />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/newpost">
    <Route index element={  <NewPost
                                          newpost1={newpost1}
                                          newpost2={newpost2}
                                          setnewpost1={setnewpost1}
                                          setnewpost2={setnewpost2}
                                          handleformsubmit={handleformsubmit}
                                                                              />}/>
    <Route path=":id" element={<Postview 
                                  posts={posts}
                                  handleDelete={handleDelete}
                                  />}/>

    </Route>
   
  <Route path="*" element={<Missing/>}/>

  <Route path="/editpost/:id" element={<Editpost
  editname={editname}
  seteditname={seteditname}
  editcomment={editcomment}
  seteditcomment={seteditcomment}
  handleEdit={handleEdit}
  posts={posts}
  />}/>


  
  </Routes>
 
  <Footer />



      
    </>
  )



}

export default App
 




