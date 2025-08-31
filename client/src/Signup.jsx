import React, { useState } from "react";
import { FaPlaystation } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import bgg from "./assets/images/bg12.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
    navigate("/");
  };

  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgg})` }}
      >
        <div className="flex justify-center items-center h-screen">
          <div className="flex bg-white rounded-2xl border shadow-lg h-2/3 ">
            <div className="p-16 my-auto">
              <h2 className="text-center text-2xl font-bold mb-6">Signup</h2>
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
                  className="w-full px-4 py-2 border  border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="email"
                  name="email"
                  placeholder="Email"
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
                <input
                  className="w-full px-4 py-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
                <br />
                <button
                  className="w-full py-2 bg-blue-600 text-white rounded-lg"
                  type="submit"
                >
                  Signup
                </button>
              </form>
              <p className="mt-4 text-center text-blue-500 font-semibold">
                <Link to="/">Already have an account</Link>
              </p>
            </div>
            <div className="bg-blue-600 flex justify-center items-center px-28 rounded-e-2xl text-white text-7xl">
              <FaPlaystation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
