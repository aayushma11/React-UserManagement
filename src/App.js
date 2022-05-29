import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name:uName, age:uAge, id: Math.random().toString()}]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUsersHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
