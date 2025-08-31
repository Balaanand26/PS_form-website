import React from "react";
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Games from "./components/Games"
import Banner from "./components/Banner"
import Footer from "./components/Footer";

const LoginSuccess = () => {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Hero></Hero>
      <Products></Products>
      <Games></Games>
      <Banner></Banner>
      <Footer></Footer>
    </>
  );
};

export default LoginSuccess;
