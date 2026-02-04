import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin123") {
      navigate("/admin/products");
      return;
    }
    if (email === "user@gmail.com" && password === "user123") {
      navigate("/user");
      return;
    }
    alert("Invalid inputs");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <form
        onSubmit={handleSubmit}
        className="w-full p-6 max-w-sm rounded-lg shadow-md bg-white"
      >
        <h2 className="font-semibold text-center">Login</h2>
        <div>
          <label className="ml-0">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="border rounded-lg p-2 ml-14 mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="ml-0">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="border rounded-lg p-2 ml-7 mt-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-3"
          type="sumbit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
