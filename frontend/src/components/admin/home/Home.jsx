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
      console.log("the req user info " + userInfo[0].success);
      if (!userInfo[0].success && !token) {
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
