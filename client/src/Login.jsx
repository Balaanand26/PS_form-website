import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaPlaystation } from "react-icons/fa";
import bgg from "./assets/images/bg12.png";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); //

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://ps-form-website-backend.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      navigate("/success");
    } else {
      navigate("/fail");
    }
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgg})` }}
      >
        <div className="flex justify-center items-center h-screen">
          <div className="flex bg-white rounded-2xl border shadow-lg h-2/3">
            <div className="bg-blue-600 flex justify-center items-center px-28 rounded-s-2xl text-white text-7xl">
              <FaPlaystation />
            </div>
            <div className="p-16 my-auto">
              <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full px-4 py-2 border  border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  className="w-full px-4 py-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <br />
                <button
                  className="w-full py-2 bg-blue-600 text-white rounded-lg"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p className="mt-4 text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 font-semibold">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
