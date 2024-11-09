import React, { useContext, useEffect } from "react";
import HomeList from "../components/HomeList";
import { useNavigate } from "react-router-dom";
import store from "../../../store/store";
import Cookies from "js-cookie";
function Home() {
  const navigate = useNavigate();
  const userInfo = useContext(store);
  const token = Cookies.get("token");
  useEffect(
    () => {
      let userData = localStorage.getItem("userdata");
      let userObj = JSON.parse(userData);
      let role=userObj?.user?.role;
     
      if (role=="jobseeker" && !token) {
        navigate("/login");
      }
    },
    userInfo[0],
    token,
    userInfo
  );
  return (
    <>
      <div className="min-h-screen">
        <HomeList />
      </div>
    </>
  );
}

export default Home;
