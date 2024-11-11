import React, { useState } from "react";
import Alltoast from "../toast/Alltoast";

function UpdateProfile() {
  const [loading, setLoading] = useState(false);
  // const { user } = useSelector(store => store.auth);
  const userData = localStorage.getItem("userdata");
  const user = JSON.parse(userData);
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/user/profile/update",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        // dispatch(setUser(res.data.user));
        // toast.success(res.data.message);
        console.log(res.data);
        localStorage.setItem("userdata",JSON.stringify(res.data))
        Alltoast(res.data.message, res.data.success);
      }
    } catch (error) {
      console.log(error);
      Alltoast(error.response.data.message, false);
    } finally {
      setLoading(false);
    }
    console.log(input);
  };

  return (
    <>
      <div className="">
        <div>
          <div
            className="sm:max-w-[425px]"
            onInteractOutside={() => alert("called")}
          >
            <div>
              <h1>Update Profile</h1>
            </div>
            <form onSubmit={submitHandler}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={input.fullname}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="email" className="text-right">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="number" className="text-right">
                    Number
                  </label>
                  <input
                    id="number"
                    name="number"
                    value={input.phoneNumber}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="bio" className="text-right">
                    Bio
                  </label>
                  <input
                    id="bio"
                    name="bio"
                    value={input.bio}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="skills" className="text-right">
                    Skills
                  </label>
                  <input
                    id="skills"
                    name="skills"
                    value={input.skills}
                    onChange={changeEventHandler}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="file" className="text-right">
                    Resume
                  </label>
                  <input
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
                    onChange={fileChangeHandler}
                    className="col-span-3"
                  />
                </div>
              </div>
              <div>
                {loading ? (
                  <button className="w-full my-4">
                    {" "}
                    <div className="mr-2 h-4 w-4 animate-spin" /> Please wait{" "}
                  </button>
                ) : (
                  <button type="submit" className="w-full my-4">
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
