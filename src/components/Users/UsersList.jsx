import axios from "axios";
import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const searchUsers = () =>
    users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-col text-center justify-center mt-20">
      <h1 className=" font-bold">Users List</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="px-3 border  mx-50 mb-3"
      />
      <table className="border">
        <thead>
          <tr className="font-bold">
            <th className="border">Name</th>
            <th className="border">Email</th>
          </tr>
        </thead>
        <tbody>
          {searchUsers().length === 0 ? (
            <tr>
              <td>No Users Found!!!</td>
            </tr>
          ) : (
            searchUsers().map((u) => (
              <tr key={u.id}>
                <td className="border">{u.name}</td>
                <td className="border">{u.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
