import React from "react";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import LoginSuccess from "./LoginSuccess";
import LoginFail from "./LoginFail";


const App = () => {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/success" element={<LoginSuccess />}></Route>
          <Route path="/fail" element={<LoginFail />}></Route>
        </Routes>
      </Routers>
    </>
  );
};

export default App;
