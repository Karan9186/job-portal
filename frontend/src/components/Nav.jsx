import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { IoLogOut } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import Cookies from "js-cookie";
import Alltoast from "./toast/Alltoast.jsx";
import { useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoNotificationsOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { useEffect } from "react";
import store from "../store/store";

const navigation = [
  { name: "Home", link: "/", current: true },
  { name: "Jobs", link: "/jobs", current: false },
  { name: "Contact", link: "/contact", current: false },
];
const reqNavigationLink = [
  { name: "Home", link: "/recruiter/home", current: true },
  { name: "job", link: "/recruiter/show/job", current: true },
  { name: "Contact", link: "/contact", current: false },
];

const userNavigation = [
  { name: "Your Profile", link: "profile" },
  { name: "Sign out", link: "logOut" },
];
const reqNavigation = [{ name: "Sign out", link: "logOut" }];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const [login, setLogin] = useState();
  const userInfo = useContext(store);
  console.log("the useinfo " + userInfo[0]);
  let [role, setRole] = useState("");

  const token = Cookies.get("token");
  useEffect(
    () => {
      let userData = localStorage.getItem("userdata");
      let userObj = JSON.parse(userData);
      setRole(userObj?.user?.role);
      console.log(role);

      console.log("the token inside nav bar is " + token);
      setLogin(true);
    },
    token,
    login,
    role
  );
  const user = localStorage.getItem("userdata");
  const userData = JSON.parse(user);

  const naviagate = useNavigate();
  return (
    <>
      {role == "recruiter" ? (
        <div className="min-h-full">
          <Disclosure
            as="nav"
            className="bg-white shadow-xl border border-rounded fixed w-[100%] z-50"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <h1 className="text-black text-[30px] font-bold">
                      <span className="text-red-800 font-bold">Hire</span>Link
                    </h1>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {reqNavigationLink.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => naviagate(`${item.link}`)}
                          className="rounded-md px-3 py-2 text-sm font-medium  text-black hover:text-red-600"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  {login == true && token ? (
                    <>
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* <button
                          type="button"
                          className="relative rounded-full p-1 bg-slate-200"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <IoNotificationsOutline size={"24px"} />
                        </button> */}

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                alt=""
                                src={userData?.user?.profile?.profilePhoto}
                                className="h-8 w-8 rounded-full"
                              />
                            </MenuButton>
                          </div>
                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {reqNavigation.map((item) => (
                              <MenuItem key={item.name}>
                                <button
                                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                  onClick={() => {
                                    if (item.name == "Sign out") {
                                      console.log("called logout");
                                      Cookies.remove("token");
                                      localStorage.removeItem("userdata");
                                      Alltoast("logout succesfully", true);
                                      naviagate("/login");
                                      setLogin(false);
                                    } else {
                                      naviagate(`${item.link}`);
                                    }
                                  }}
                                >
                                  <h1 className="flex items-center gap-2">
                                    <IoLogOut size={"30px"} />
                                    <h1>{item.name}</h1>
                                  </h1>
                                </button>
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-5">
                        <button
                          className="px-4 py-1 font-semibold bg-red-100 border border-red-500 rounded hover:bg-red-200"
                          onClick={() => naviagate("/login")}
                        >
                          Login
                        </button>
                        <button
                          className="px-4 py-1 bg-red-500 font-semibold text-white hover:bg-red-700 rounded"
                          onClick={() => naviagate("/register")}
                        >
                          SignUp
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 bg-slate-200">
                    <span className="absolute -inset-0.5" />
                    <HiMenuAlt3 size={"24px"} />
                    <span className="sr-only">Open main menu</span>
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? ""
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      alt=""
                      src={userData?.user?.profile?.profilePhoto}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user?.email}
                    </div>
                  </div>
                  {/* <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full p-1 bg-slate-200"
                  >
                    <span className="absolute -inset-1.5" />
                    <IoNotificationsOutline size={"22px"} />
                    <span className="sr-only">View notifications</span>
                  </button> */}
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {reqNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      ) : (
        <div className="min-h-full">
          <Disclosure
            as="nav"
            className="bg-white shadow-xl border border-rounded fixed w-[100%] z-50"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <h1 className="text-black text-[30px] font-bold">
                      <span className="text-red-800 font-bold">Hire</span>Link
                    </h1>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => naviagate(`${item.link}`)}
                          className="rounded-md px-3 py-2 text-sm font-medium  text-black hover:text-red-600"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  {login == true && token ? (
                    <>
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* <button
                          type="button"
                          className="relative rounded-full p-1 bg-slate-200"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <IoNotificationsOutline size={"24px"} />
                        </button> */}

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                alt=""
                                src={userData?.user?.profile?.profilePhoto}
                                className="h-8 w-8 rounded-full"
                              />
                            </MenuButton>
                          </div>
                          <MenuItems
                            transition
                            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {userNavigation.map((item) => (
                              <MenuItem key={item.name}>
                                <button
                                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                                  onClick={() => {
                                    if (item.name == "Sign out") {
                                      Cookies.remove("token");
                                      localStorage.removeItem("userdata");
                                      Alltoast("logout succesfully", true);
                                      naviagate("/login");
                                      setLogin(false);
                                    } else {
                                      naviagate(`${item.link}`);
                                    }
                                  }}
                                >
                                  {item.name == "Your Profile" ? (
                                    <h1 className="flex items-center gap-2">
                                      <img
                                        alt=""
                                        src={
                                          userData?.user?.profile?.profilePhoto
                                        }
                                        className="h-8 w-8 rounded-full"
                                      />
                                      <h1 className="font-semibold">
                                        {userData?.user?.fullname}
                                      </h1>
                                    </h1>
                                  ) : (
                                    <h1 className="flex items-center gap-2">
                                      <IoLogOut size={"30px"} />
                                      <h1 className="font-semibold">
                                        {" "}
                                        {item.name}
                                      </h1>
                                    </h1>
                                  )}
                                </button>
                              </MenuItem>
                            ))}
                          </MenuItems>
                        </Menu>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-5">
                        <button
                          className="px-4 py-1 font-semibold bg-red-100 border border-red-500 rounded hover:bg-red-200"
                          onClick={() => naviagate("/login")}
                        >
                          Login
                        </button>
                        <button
                          className="px-4 py-1 bg-red-500 font-semibold text-white hover:bg-red-700 rounded"
                          onClick={() => naviagate("/register")}
                        >
                          SignUp
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 bg-slate-200">
                    <span className="absolute -inset-0.5" />
                    <HiMenuAlt3 size={"24px"} />
                    <span className="sr-only">Open main menu</span>
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? ""
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      alt=""
                      src={userData?.user?.profile?.profilePhoto}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {/* {user.name} */}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {/* {user.email} */}
                    </div>
                  </div>
                  {/* <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full p-1 bg-slate-200"
                  >
                    <span className="absolute -inset-1.5" />
                    <IoNotificationsOutline size={"22px"} />
                    <span className="sr-only">View notifications</span>
                  </button> */}
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      )}
    </>
  );
}
