import React from 'react'

const AddNewUser = ({user,setUser,Uname,setUname, Uemail,setUemail,Uwebsite,setUwebsite}) => {

    function addUser() {
        let username = Uname.trim();
        let useremail = Uemail.trim();
        let userwebsite = Uwebsite.trim();
    
        if (!username || !useremail || !userwebsite) {
          alert("Please fill in all fields!");
          return;
        }
    
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          body: JSON.stringify({
            name: username,
            email: useremail,
            website: userwebsite
          }),
          headers: {
            "Content-Type": "application/json; charset=UTF-8"
          }
        })
          .then((response) => response.json()) 
          .then((data) => {
            setUser([...user, data]);
    
           setTimeout(() => {
            alert("user add suess")
           }, 1000); 
            setUname(""); // Clear form after adding user
            setUemail("");
            setUwebsite("");
          })
          .catch((error) => {
            console.error("Error adding user:", error);
          });

        }




  return (
    <>
                <button
                  className="border-4 border-black bg-green-600 px-5 py-2"
                  onClick={addUser}
                >
                  Add New User
                </button>
    </>
  )
}

export default AddNewUser