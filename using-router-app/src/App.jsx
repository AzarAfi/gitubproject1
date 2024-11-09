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



function App() {

  const[posts,setposts]=useState([
    { id: 1, name: "John Doe", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Loves playing soccer." },
    { id: 2, name: "Jane Smith", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Enjoys hiking and photography." },
    { id: 3, name: "Alice Brown", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Avid reader and book collector." },
    { id: 4, name: "Bob Johnson", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Guitar player in a local band." },
    { id: 5, name: "Charlie Davis", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Tech enthusiast and gamer." },
    { id: 6, name: "David White", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Loves traveling the world." },
    { id: 7, name: "Eva Green", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Passionate about painting and art." },
    { id: 8, name: "Frank Miller", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Works as a software engineer." },
    { id: 9, name: "Grace Lee", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Fitness junkie and yoga practitioner." },
    { id: 10, name: "Hannah Scott", dob: "Monday, November 8, 2024, 01:34:56 PM", comment: "Enjoys cooking and baking desserts." }
  ]
      
  )

  const[postval,setpostval]=useState("")
  const[searchres,setsearchres]=useState([])
  const[newpost1,setnewpost1]=useState("")
  const[newpost2,setnewpost2]=useState("")
  const navicate =useNavigate()
 
useEffect(()=>{
  const filterresult=posts.filter((post)=>
    ((post.name).toLowerCase()).includes(postval.toLowerCase())
  )
  setsearchres(filterresult.reverse());

},[posts,postval]) 


  
  function handleformsubmit(e){
    e.preventDefault();
  const id=posts.length ? posts[posts.length-1].id+1:1;
  const datetime = format(new Date(), "EEEE, MMMM dd, yyyy, hh:mm:ss a");
  const newpost={id,name:newpost1,dob:datetime,comment:newpost2}
  const updatepost=[...posts,newpost]
  setposts(updatepost)
  setnewpost1("")
  setnewpost2("")
  setTimeout(() => {
    alert("add post suess")
  },1000);
  navicate("/")
} 

function handleDelete(id){
  const postid= posts.filter(post=> post.id !== id);
  
  setposts(postid)
  navicate("/")

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
                                  handleDelete={handleDelete}/>}/>

    </Route>
   
  <Route path="*" element={<Missing/>}/>


  
  </Routes>
 
  <Footer />



      
    </>
  )



}

export default App
 




