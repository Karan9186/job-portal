import React, { useState } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import Error from "./components/Error";
import Contact from "./components/Contact";

import Profile from "./components/profile/Profile";
import Footer from "./components/Footer";
import Register from "./components/register/Register";
import Recruiter from "./components/register/Recruiter";
import Jobseeker from "./components/register/Jobseeker";
import RecRegi from "./components/register/RecRegi";
import store from "./store/store";
function App() {
  const [login, setLogin] = useState("false");

  return (
    <>
      <store.Provider value={[login, setLogin]}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Jobs />} /> //for job query
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/recruiter/register" element={<RecRegi />} />
          <Route path="/jobseeker" element={<Jobseeker />} />
          <Route path="/login" element={<Register />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        {/* <<<<<<< HEAD */}
        <Footer />
        {/* ======= */}
        <br />
        {/* <Footer /> */}
        {/* >>>>>>> 938e1a80ba548abe656723eca77f3729a7e24fd2 */}
      </store.Provider>
    </>
  );
}

export default App;
