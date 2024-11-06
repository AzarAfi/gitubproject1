import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState([]);
  const [Uname, setUname] = useState("");
  const [Uemail, setUemail] = useState("");
  const [Uwebsite, setUwebsite] = useState("");

  // Function to add a new user
  function addNewUser() {
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
      .then((response) => response.json()) // Fix the typo here
      .then((data) => {
        setUser([...user, data]);

       setTimeout(() => {
        alert("user add suess")
       }, 2000); 
        setUname(""); // Clear form after adding user
        setUemail("");
        setUwebsite("");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
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
        <table className="w-1/2">
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
                <td>{userDetails.name}</td>
                <td>{userDetails.email}</td>
                <td>{userDetails.website}</td>
                <td>
                  {/* Placeholder buttons for edit & delete */}
                  <button className="border-2 px-3 py-1 bg-blue-500 text-white">Edit</button>
                  <button className="border-2 px-3 py-1 bg-red-500 text-white ml-2">Delete</button>
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
                <button
                  className="border-4 border-black bg-green-600 px-5 py-2"
                  onClick={addNewUser}
                >
                  Add user
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
    </>
  );
}

export default App;
