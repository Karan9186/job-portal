import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/profile/Profile";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Recruitersignup from "./components/Recruitersignup";
import Recruiterlogin from "./components/Recruiterlogin";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recruitersignup" element={<Recruitersignup />} />
        <Route path="/recruiterlogin" element={<Recruiterlogin />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <br />
      <Footer />
    </>
  );
}

export default App;
