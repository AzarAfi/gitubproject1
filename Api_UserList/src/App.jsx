import { useEffect, useState } from 'react'
import AddNewUser from './AddNewUser';

function App() {

  //***********Using Hook
  const [user, setUser] = useState([]);
  const [Uname, setUname] = useState("");
  const [Uemail, setUemail] = useState("");
  const [Uwebsite, setUwebsite] = useState("");


// ************functions
 
// 1.Get Edit the Elament


 function Editcontent(id,key,values){
  const newValue = values.target.value;
  setUser((user)=>{ 
    return user.map(user=>
  {
     return user.id === id ? {...user,[key]:newValue}:user;
  })
})
 }



 // 2.Update the after Edit Elament


function updateUser(id){
  const checkuser=user.find((user)=> user.id === id);
  fetch("https://jsonplaceholder.typicode.com/users/10", {
    method: "PUT",
    body: JSON.stringify(checkuser),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json()) 
    .then((data) => {
     setTimeout(() => {
      alert("user update suess")
     }, 1000); 
    })
}

// 3. Delete the elament

function deleteUser(id){
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json()) 
    .then((data) => {

      setUser((user)=>{
        
        return user.filter( user=> user.id !== id)}
      
      )
     setTimeout(() => {
      alert("delete user sesses")
     }, 1000); 
    })

}


  // Fetch initial user data on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((getUserData) => setUser(getUserData))
  }, []);

  return (
    <>
      <main className="flex justify-center mt-10 w-screen h-full">
        <table className="w-fit">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>WebSite</th>
              <th>Edit & Delete</th>
            </tr>
          </thead>
          <tbody>
            {user.map((userDetails) => (
              <tr key={userDetails.id}>
                <td>{userDetails.id}</td>
                <td><input type="text" value={userDetails.name} onChange={value => Editcontent(userDetails.id,"name",value)} className="border-4 border-black p-3"/></td>
                <td><input type="text" value={userDetails.email} onChange={value => Editcontent(userDetails.id,"email",value)} className="border-4 border-black p-3"/></td>
                <td><input type="text" value={userDetails.website} onChange={value => Editcontent(userDetails.id,"website",value)}className="border-4 border-black p-3"/></td>
                <td>
                  {/* Placeholder buttons for edit & delete */}
                  <button className="border-2 px-3 py-1 bg-blue-500 text-white" onClick={()=>updateUser(userDetails.id)}>Edit</button>
                  <button className="border-2 px-3 py-1 bg-red-500 text-white ml-2" onClick={()=>deleteUser(userDetails.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td>
                <input
                  type="text"
                  className="border-4 border-black p-3"
                  value={Uname}
                  onChange={(e) => setUname(e.target.value)}
                  placeholder="Enter your name"
                />
              </td>

              <td>
                <input
                  type="text"
                  className="border-4 border-black p-3"
                  value={Uemail}
                  onChange={(e) => setUemail(e.target.value)}
                  placeholder="Enter your Email"
                />
              </td>

              <td>
                <input
                  type="text"
                  className="border-4 border-black p-3"
                  value={Uwebsite}
                  onChange={(e) => setUwebsite(e.target.value)}
                  placeholder="Enter your website"
                />
              </td>

              <td>

                {/* Using Compounent from Add New  */}

                <AddNewUser 
                user={user}
                setUser={setUser}

                Uname={Uname}
                setUname={setUname}

                Uemail={Uemail}
                setUemail={setUemail}

                Uwebsite={Uwebsite}
                setUwebsite={setUwebsite}
                />

              </td>
            </tr>
          </tfoot>
        </table>
      </main>
    </>
  );
}

export default App;
