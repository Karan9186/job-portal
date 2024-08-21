import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import Error from "./components/Error";
import Contact from "./components/Contact";
<<<<<<< HEAD
import Profile from "./components/Profile";
import Setting from "./components/Setting";
import Footer from "./components/jobs/Footer";
=======
import Profile from "./components/profile/Profile";
import Footer from "./components/Footer";
import Register from "./components/register/Register";
import Recruiter from "./components/register/Recruiter";
import Jobseeker from "./components/register/Jobseeker";
>>>>>>> 938e1a80ba548abe656723eca77f3729a7e24fd2

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/jobseeker" element={<Jobseeker />} />
        <Route path="/*" element={<Error />} />
      </Routes>
<<<<<<< HEAD
      <Footer/>
=======
      <br />
      <Footer />
>>>>>>> 938e1a80ba548abe656723eca77f3729a7e24fd2
    </>
  );
}

export default App;
