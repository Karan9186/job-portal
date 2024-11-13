import React, { useState } from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
import Error from "./components/Error";
import Contact from "./components/Contact";
import HomeReq from "./components/admin/home/Home";

import Profile from "./components/profile/Profile";
import Footer from "./components/Footer";
import Register from "./components/register/Register";
import Recruiter from "./components/register/Recruiter";
import Jobseeker from "./components/register/Jobseeker";
import RecRegi from "./components/register/RecRegi";
import store from "./store/store";
import AddCompnay from "./components/admin/components/AddCompnay";
import ShowAllJob from "./components/admin/components/ShowAllJob";
import AddJob from "./components/admin/components/AddJob";
import Applicant from "./components/admin/components/Applicant";
import UpdateJob from "./components/admin/components/UpdateJob";
import UpdateCompnay from "./components/admin/components/UpdateCompnay";
import JobDetails from "./components/JobDetails";
import JobseekerRegister from "./components/register/JobseekerRegister";
import UpdateProfile from "./components/profile/UpdateProfile";

function App() {
  const [login, setLogin] = useState("");

  return (
    <>
      <store.Provider value={[login, setLogin]}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Jobs />} /> //for job query
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobinfo/:id" element={<JobDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<UpdateProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/recruiter/register" element={<RecRegi />} />
          <Route path="/jobseeker" element={<Jobseeker />} />
          <Route path="/login" element={<Register />} />
          <Route path="/*" element={<Error />} />
          <Route path="/jobseeker/register" element={<JobseekerRegister />} />
          {/* recruiter routes */}
          <Route path="/recruiter/home" element={<HomeReq />} />
          <Route path="/recruiter/add/company" element={<AddCompnay />} />
          <Route path="/recruiter/show/job" element={<ShowAllJob />} />
          <Route
            path="/recruiter/company/update/:id"
            element={<UpdateCompnay />}
          />
          <Route path="/recruiter/add/job" element={<AddJob />} />
          <Route path="/recruiter/applicant/job" element={<Applicant />} />
          <Route path="/recruiter/job/update/:id" element={<UpdateJob />} />
        </Routes>

        <br />
      </store.Provider>
      <Footer />

      <br />
    </>
  );
}

export default App;
