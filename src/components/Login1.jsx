import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login1 = ({ setUname }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "admin" && password === "admin123") {
      setUname(name);
      navigate("/dashboard1");
    } else {
      alert("Invalid Name or Password!!!");
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex items-center gap-3">
          <label className="w-24">Name</label>
          <input
            type="text"
            className="border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="w-24">Password</label>
          <input
            type="password"
            className="border p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center border">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login1;
