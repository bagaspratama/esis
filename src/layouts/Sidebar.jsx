import React, { useEffect, useRef, useState } from "react";
import { LuHome } from "react-icons/lu";
import {
  LuSchool,
  LuDatabaseBackup,
  LuBookMarked,
  LuAlarmClock,
  LuChevronDown,
  LuLogOut,
} from "react-icons/lu";
import { FaWhatsapp, FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";
import { RiRfidFill } from "react-icons/ri";
export default function Sidebar({ isOpen }) {
  const [menuOpen, setMenuOpen] = useState(true);
  const menuTarget = useRef();
  const sideTarget = useRef();

  useEffect(() => {
    if (isOpen) {
      sideTarget.current.classList.remove("hidden");
    } else {
      sideTarget.current.classList.add("hidden");
    }
  }, [isOpen]);

  const triggerMenu = () => {
    if (menuOpen) {
      menuTarget.current.classList.remove("hidden");
    } else {
      menuTarget.current.classList.add("hidden");
    }
    setMenuOpen(!menuOpen);
  };
  return (
    <div
      className="w-64 border-r border-grayline-200 bg-white hidden lg:block"
      ref={sideTarget}
    >
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-start">
          <a
            href="#"
            className="bg-blue-600 p-1.5 rounded flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <svg
              className="w-5 h-5 text-white stroke-current"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
          <div className="flex flex-col">
            <h2 className="ml-4 font-semibold text-lg">Attendez</h2>
            <span className="ml-4 text-xs">Aplikasi Versi 2.1.5</span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4">
        <span className=" font-normal text-gray-100 text-xs">DASHBOARD</span>
        <ul className="flex flex-col space-y-2">
          <li className="relative text-gray-500 my-1">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <LuHome />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Beranda
            </a>
          </li>
        </ul>
      </div>
      <div className="px-6 pt-4">
        <hr className="border-grayline-200" />
      </div>
      <div className="px-6 pt-4">
        <span className=" font-normal text-gray-100 text-xs">
          APLIKASI UTAMA
        </span>
        <ul>
          <li className="">
            <div
              className="relative flex items-center justify-between text-gray-500 cursor-pointer"
              onClick={triggerMenu}
            >
              <div className="flex items-center w-full">
                <div className="absolute inset-y-0 left-0 flex text-gray-100 items-center pl-2 pointer-events-none">
                  <LuBookMarked />
                </div>
                <div className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 ">
                  Absensi Siswa
                </div>
              </div>
              <button
                className="absolute right-0 flex items-center p-1"
                tabIndex="-1"
              >
                <div className="w-5 h-5 stroke-current ">
                  <LuChevronDown />
                </div>
              </button>
            </div>
            <div className="pt-2 pl-4">
              <ul
                className="flex flex-col pl-2 text-gray-500 border-l border-grayline-200 hidden"
                ref={menuTarget}
              >
                <li className="my-1">
                  <a
                    href="#"
                    className="inline-block w-full px-4 py-2 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
                  >
                    Absensi
                  </a>
                </li>
                <li className="my-1">
                  <a
                    href="#"
                    className="inline-block w-full px-4 py-2 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
                  >
                    Dispensasi
                  </a>
                </li>
                <li className="my-1">
                  <a
                    href="#"
                    className="inline-block w-full px-4 py-2 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
                  >
                    Manual Absensi
                  </a>
                </li>
                <li className="my-1">
                  <a
                    href="#"
                    className="inline-block w-full px-4 py-2 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
                  >
                    Laporan Absensi
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="px-6 pt-4">
        <hr className="border-grayline-200" />
      </div>
      <div className="px-6 pt-4">
        <span className=" font-normal text-gray-100 text-xs">DATA MASTER</span>
        <ul className="flex flex-col space-y-2">
          <li className="relative text-gray-500 my-1">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <PiStudentBold />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Peserta Didik
            </a>
          </li>
          <li className="relative text-gray-500 my-1">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <SiGoogleclassroom />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Rombongan Belajar
            </a>
          </li>
          <li className="relative text-gray-500 my-1">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <RiRfidFill />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Mesin Absensi
            </a>
          </li>
          <li className="relative text-gray-500 my-1">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <FaChalkboardTeacher />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Guru
            </a>
          </li>
        </ul>
      </div>
      <div className="px-6 pt-4">
        <hr className="border-grayline-200" />
      </div>
      <div className="px-6 pt-4">
        <span className=" font-normal text-gray-100 text-xs">PENGATURAN</span>
        <ul>
          <li className="relative text-gray-500 ">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <LuAlarmClock />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Jadwal Sekolah
            </a>
          </li>
          <li className="relative text-gray-500 ">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <FaWhatsapp />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Whatsapp
            </a>
          </li>
          <li className="relative text-gray-500 ">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <LuSchool />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Sekolah
            </a>
          </li>
          <li className="relative text-gray-500 ">
            <div className="absolute inset-y-0 text-gray-100 left-0 flex items-center pl-2 pointer-events-none">
              <LuDatabaseBackup />
            </div>
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-sm rounded hover:text-sidecolor-400 hover:bg-sidecolor-200 focus:outline-none focus:text-sidecolor-400 focus:bg-sidecolor-200 focus:font-semibold hover:font-semibold"
            >
              Database
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
