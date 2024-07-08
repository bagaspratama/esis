import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { LuMenuSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthenticatedLayout({ children }) {
  const user = useSelector((state) => state.auth.token);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profilOpen, setProfilOpen] = useState(false);
  const profileTarget = useRef();

  const trigerProfile = () => {
    if (profilOpen) {
      profileTarget.current.classList.remove("hidden");
    } else {
      profileTarget.current.classList.add("hidden");
    }
    setProfilOpen(!profilOpen);
  };
  const triggerSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex w-full min-h-screen bg-white">
      {/* START SIDEBAR */}
      <Sidebar isOpen={sidebarOpen} />
      {/* END SIDEBAR */}
      <div className="flex flex-col flex-1">
        {/* START TOPBAR */}
        <nav className="flex items-center justify-between flex-wrap bg-white border-b border-grayline-200 p-5 w-full">
          <div className="block lg:hidden">
            <button
              onClick={triggerSidebar}
              className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-500"
            >
              <LuMenuSquare />
            </button>
          </div>
          {!sidebarOpen && (
            <div className="text-sm text-gray-500">Minggu, 16 Juni 2024</div>
          )}

          {!sidebarOpen && (
            <div className="flex items-center flex-shrink-0 mr-12">
              <div
                className="flex items-center cursor-pointer"
                onClick={trigerProfile}
              >
                <div className="flex flex-col items-end pl-3 hidden md:block">
                  <div className="text-sm text-gray-500"> {user.name}</div>
                  <span className="text-xs text-gray-500 font-light tracking-tight">
                    {user.username}
                  </span>
                </div>
                <div className="relative w-8 h-8 ml-2 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
          <div
            className="bg-white rounded-md border border-grayline-200 text-black text-xs flex flex-col absolute z-[999] lg:right-20 right-0 top-[80px] min-w-[224px] overflow-hidden hidden"
            ref={profileTarget}
          >
            <span className="transition-all font-semibold text-gray-500 p-4">
              Akun Saya
            </span>
            <hr className="border-grayline-200" />
            <a
              href="#"
              className="transition-allhover:text-sidecolor-400 hover:bg-sidecolor-200 px-4 py-2"
            >
              Ubah Password
            </a>

            <Link
              href="#"
              method="post"
              className="transition-allhover:text-sidecolor-400 hover:bg-sidecolor-200 px-4 py-2"
            >
              Keluar
            </Link>
          </div>
        </nav>
        {/* END TOPBAR */}
        {/* START CONTENT */}
        <div className="bg-gray-200 flex-1 lg:px-60 lg:py-7 px-2 py-2">
          <div className="flex flex-col">
            <div className="flex">
              <a className="text-sidecolor-400 underline" href="#">
                Dashboard
              </a>
              <span className="ml-2 text-gray-500"> / Beranda</span>
            </div>
            <div className="flex">
              <h1 className="text-gray-500 font-semibold text-2xl">
                Halaman Beranda
              </h1>
            </div>
          </div>
          <div className="mt-4">{children}</div>
        </div>
        {/* END CONTENT */}
      </div>
    </div>
  );
}
