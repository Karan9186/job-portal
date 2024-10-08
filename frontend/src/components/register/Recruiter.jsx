import React, { useContext, useEffect } from "react";
import RecLogin from "./RecLogin";
import RecRegi from "./RecRegi";
import { useNavigate } from "react-router-dom";
import store from "../../store/store";
import Cookies from "js-cookie";
// const userInfo = useContext(store);
// const token = Cookies.get("token");
// const naviagate = useNavigate();
// useEffect(
//   () => {
//     if (userInfo[0].success == true && token) {
//       navigate("/");
//     }
//   },
//   token,
//   userInfo[0]
// );
function Recruiter() {
  return (
    <div>
      <br />
      <br />
      <br />
      <RecLogin />
    </div>
  );
}

export default Recruiter;
