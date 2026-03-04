import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard1 = ({ uname, setUname }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUname("");
    navigate("/login1");
  };
  return (
    <div className="flex min-h-screen justify-center items-center">
      {uname ? (
        <div className="text-green-600 ">
          Welcome {uname}!!!
          <button className="p-1 mx-2 border bg-red-600 text-white hover:bg-red-800" onClick={handleLogout}>LogOut</button>
        </div>
      ) : (
        <Link to="/login1" className="text-white p-1  bg-red-600 border">
          Login first!!!
        </Link>
      )}
    </div>
  );
};

export default Dashboard1;
