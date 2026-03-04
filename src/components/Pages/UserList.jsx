import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className="font-bold">UsersList</h1>
      {users.map((u) => (
        <div key={u.id}>
          <h3>{u.name}</h3>
          <button
            onClick={() => navigate(`/user/${u.id}`)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
